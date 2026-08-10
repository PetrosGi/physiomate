# Final QA gate

Use this workflow before reporting meaningful work complete.

## Steps
1. Review all changed files.
2. Check requested scope versus actual scope.
3. Check privacy/logging hygiene.
4. Check whether the right validation was run and whether anything remains unverified.
5. If destructive actions, scheduling logic, or payment logic changed, call out that risk explicitly.
6. Return:
   - verdict: pass / pass with concerns / not ready,
   - required fixes if any,
   - validation still missing,
   - residual risks.
