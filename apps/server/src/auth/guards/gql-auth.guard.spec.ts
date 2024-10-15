import { createMock } from "@golevelup/ts-jest";
import { ExecutionContext } from "@nestjs/common";
import { GqlAuthGuard } from "./gql-auth.guard";

describe("GqlAuthGuard", () => {
  let guard: GqlAuthGuard;

  beforeEach(() => {
    guard = new GqlAuthGuard();
  });

  it("should be defined", () => {
    expect(guard).toBeDefined();
  });
});
