import ProcessEnv = NodeJS.ProcessEnv;

export function WEB_DOMAIN(): string | undefined {
  return process.env.NEXT_PUBLIC_WEB_DOMAIN;
}
