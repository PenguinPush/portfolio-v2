import posthog from 'posthog-js';

const isPostHogConfigured = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST,
);

const posthogLogger = {
  info(body, attributes) {
    if (isPostHogConfigured) {
      posthog.captureLog({
        body,
        level: 'info',
        serviceName: 'portfolio-web',
        environment: process.env.NODE_ENV,
        attributes,
      });
    }
  },
};

export default posthogLogger;
