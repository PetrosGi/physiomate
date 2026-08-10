import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';

import {
  EarlyAccessFormValue,
  EarlyAccessSubmission,
  EarlyAccessSubmissionResult
} from '../../models/landing-page.models';
import { EarlyAccessInterestService } from '../../services/early-access-interest.service';
import { I18nService } from '../../services/i18n.service';

function requiredTrimmedValidator(control: AbstractControl<string>): ValidationErrors | null {
  return control.value.trim().length > 0 ? null : { requiredTrimmed: true };
}

function trimmedMinLengthValidator(minimum: number) {
  return (control: AbstractControl<string>): ValidationErrors | null => {
    return control.value.trim().length >= minimum
      ? null
      : {
          trimmedMinLength: {
            requiredLength: minimum,
            actualLength: control.value.trim().length
          }
        };
  };
}

@Component({
  selector: 'app-early-access-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule, InputTextareaModule, MessageModule],
  templateUrl: './early-access-section.component.html',
  styleUrl: './early-access-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EarlyAccessSectionComponent {
  protected readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly destroyRef = inject(DestroyRef);
  private readonly interestService = inject(EarlyAccessInterestService);
  private readonly i18n = inject(I18nService);

  protected readonly copy = computed(() => this.i18n.bundle().earlyAccess);
  protected readonly isSubmitting = signal(false);
  protected readonly submissionResult = signal<EarlyAccessSubmissionResult | null>(null);

  protected readonly form = this.formBuilder.group({
    fullName: this.formBuilder.control('', {
      validators: [requiredTrimmedValidator, trimmedMinLengthValidator(2), Validators.maxLength(80)]
    }),
    email: this.formBuilder.control('', {
      validators: [Validators.required, Validators.email, Validators.maxLength(120)]
    }),
    message: this.formBuilder.control('', {
      validators: [Validators.maxLength(500)]
    })
  });

  protected buildSubmissionPayload(): EarlyAccessSubmission {
    const { fullName, email, message } = this.form.getRawValue();
    const trimmedMessage = message.trim();

    return {
      fullName: fullName.trim(),
      email: email.trim(),
      message: trimmedMessage || undefined,
      source: 'landing-page',
      submittedAt: new Date().toISOString()
    };
  }

  protected submitForm(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submissionResult.set(null);
    this.isSubmitting.set(true);

    this.interestService
      .submitInterest(this.buildSubmissionPayload())
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.isSubmitting.set(false))
      )
      .subscribe({
        next: (result) => {
          this.submissionResult.set({
            ...result,
            message: this.copy().validation.submissionSuccess
          });

          if (result.success) {
            this.form.reset({
              fullName: '',
              email: '',
              message: ''
            });

            this.form.markAsPristine();
            this.form.markAsUntouched();
          }
        },
        error: () => {
          this.submissionResult.set({
            success: false,
            message: this.copy().validation.submissionError
          });
        }
      });
  }

  protected isFieldInvalid(controlName: keyof EarlyAccessFormValue): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }

  protected getFieldError(controlName: keyof EarlyAccessFormValue): string | null {
    const control = this.form.controls[controlName];

    if (!this.isFieldInvalid(controlName)) {
      return null;
    }

    if (control.errors?.['required'] || control.errors?.['requiredTrimmed']) {
      return controlName === 'email' ? this.copy().validation.emailRequired : this.copy().validation.fullNameRequired;
    }

    if (control.errors?.['email']) {
      return this.copy().validation.invalidEmail;
    }

    if (control.errors?.['trimmedMinLength']) {
      return this.copy().validation.fullNameMinLength;
    }

    if (control.errors?.['maxlength']) {
      if (controlName === 'fullName') {
        return this.copy().validation.fullNameMaxLength;
      }

      if (controlName === 'email') {
        return this.copy().validation.emailMaxLength;
      }

      return this.copy().validation.messageMaxLength;
    }

    return null;
  }
}