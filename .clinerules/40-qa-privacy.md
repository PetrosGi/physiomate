# QA and privacy review rule

This rule is always active for the final pass on any non-trivial task.

## Mandatory review dimensions
- correctness
- readability
- regression risk
- privacy/logging hygiene
- scope control
- validation completeness

## Sensitive-data ban
Never leave behind:
- real names
- real phone numbers
- addresses
- DOB
- medical or incident notes
- payment instrument details
- raw API payloads with sensitive fields
- debug dumps of forms or server responses

## Senior QA completion test
Before calling work done, confirm:
- the requested scope was actually addressed,
- no unrelated refactor slipped in,
- validation run is stated honestly,
- residual risks are explicit,
- memory-bank files were updated if the task changed project understanding or active status.
