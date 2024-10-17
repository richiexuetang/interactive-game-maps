export interface JwtDto {
  sub: {
    email: string;
  };
  id: string;
  /**
   * Issued at
   */
  iat: number;
}
