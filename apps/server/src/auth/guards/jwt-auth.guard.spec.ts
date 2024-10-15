import { createMock } from "@golevelup/ts-jest";
import { ExecutionContext } from "@nestjs/common";
import { GqlAuthGuard } from "./gql-auth.guard";
import { JwtGuard } from "./jwt-auth.guard";

describe("JwtGuard", () => {
  let guard: JwtGuard;

  beforeEach(() => {
    guard = new JwtGuard();
  });

  it("should be defined", () => {
    expect(guard).toBeDefined();
  });
});
