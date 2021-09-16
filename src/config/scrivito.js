import * as Scrivito from "scrivito";

export function configureScrivito(options) {
  const config = {
    adoptUi: true,
    strictSearchOperators: true,
    tenant: process.env.SCRIVITO_TENANT,
  };

  if (process.env.SCRIVITO_ORIGIN) {
    config.origin = process.env.SCRIVITO_ORIGIN;
  }

  if (process.env.SCRIVITO_ENDPOINT) {
    config.endpoint = process.env.SCRIVITO_ENDPOINT;
  }

  if (options?.priority) {
    config.priority = options.priority;
  }

  Scrivito.configure(config);
}
