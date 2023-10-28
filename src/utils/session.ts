import { IronSessionOptions } from 'iron-session';

/**
 * Iron session data format to be used
 */
export interface DebanSession {
  ipAddress: string;
  port: string;
  password: string;
}

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    debanSession: DebanSession;
  }
}

const ironSessionTTL = 30 * 60;

/**
 * Iron session configs
 */
export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'iron-session/pihole/auth',
  ttl: ironSessionTTL,
  // https://github.com/vvo/iron-session#ironoptions
  cookieOptions: {
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    secure: process.env.NODE_ENV === 'production',
    // https://github.com/vvo/iron-session#session-cookies
    // maxAge: undefined // session expires when closing window/tab.
  },
};
