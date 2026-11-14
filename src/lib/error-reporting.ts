// Generic client-side error reporting utility.
// Replace the body of `reportError` with your preferred error tracking
// service (e.g. Sentry, Datadog RUM) when needed.

export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  // Log to console in all environments so errors are always visible.
  console.error("[error-reporting]", error, context);
}
