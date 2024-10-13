export interface JwtDto {
  id: string;
  /**
   * Issued at
   */
  iat: number;
  /**
   * Expiration time
   */
  exp: number;
  sub: {
    email: string;
  };
}
