import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://60b8350914874da884d728e5e0061cea@sentry.io/1352985"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
