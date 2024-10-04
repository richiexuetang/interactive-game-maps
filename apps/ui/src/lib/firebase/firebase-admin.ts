import "server-only";

import { initializeApp, getApps } from "firebase-admin/app";
import { SessionCookieOptions, getAuth } from "firebase-admin/auth";
import { cookies } from "next/headers";

const admin = require("firebase-admin");

export const firebaseApp =
  getApps().find(
    (it) => it.name === process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  ) ||
  initializeApp(
    {
      credential: admin.credential.cert({
        type: process.env.NEXT_PUBLIC_FIREBASE_TYPE,
        project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        private_key_id: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
        client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
        client_id: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_ID,
        auth_uri: process.env.NEXT_PUBLIC_FIREBASE_AUTH_URL,
        token_uri: process.env.NEXT_PUBLIC_FIREBASE_TOKEN_URL,
        auth_provider_x509_cert_url:
          process.env.NEXT_PUBLIC_FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url:
          process.env.NEXT_PUBLIC_FIREBASE_CLIENT_X509_CERT_URL,
        universe_domain: process.env.NEXT_PUBLIC_FIREBASE_UNIVERSAL_DOMAIN,
      }),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    },
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  );
export const auth = getAuth(firebaseApp);

export async function isUserAuthenticated(
  session: string | undefined = undefined
) {
  const _session = session ?? (await getSession());
  if (!_session) return false;

  try {
    const isRevoked = !(await auth.verifySessionCookie(_session, true));
    return !isRevoked;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getCurrentUser() {
  const session = await getSession();

  if (!(await isUserAuthenticated(session))) {
    return null;
  }

  const decodedIdToken = await auth.verifySessionCookie(session!);
  const currentUser = await auth.getUser(decodedIdToken.uid);

  return currentUser;
}

async function getSession() {
  try {
    return cookies().get("__session")?.value;
  } catch (error) {
    return undefined;
  }
}

export async function createSessionCookie(
  idToken: string,
  sessionCookieOptions: SessionCookieOptions
) {
  return auth.createSessionCookie(idToken, sessionCookieOptions);
}

export async function revokeAllSessions(session: string) {
  const decodedIdToken = await auth.verifySessionCookie(session);

  return await auth.revokeRefreshTokens(decodedIdToken.sub);
}
