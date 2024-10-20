import { GoogleOAuthGuard } from "./google-oauth.guard";

describe("GoogleOAuthGuard", () => {
  let guard: GoogleOAuthGuard;

  beforeEach(() => {
    guard = new GoogleOAuthGuard();
  });

  it("should be defined", () => {
    expect(guard).toBeDefined();
  });
});
