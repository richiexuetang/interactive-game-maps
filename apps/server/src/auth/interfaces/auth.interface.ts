export interface GoogleUser {
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
  accessToken: string;
  refreshToken: string;
}

export interface UserFromJwt {
  id: string;
  sub: {
    email: string;
  };
}
