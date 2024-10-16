import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing';

Sentry.init({
    dsn:'',
    integrations:[],
    tracesSampleRate:1.0,
});

function name() {
  return 222 + 222;
}
console.log(name())

