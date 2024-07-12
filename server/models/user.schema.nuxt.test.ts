import { test } from "vitest";
import { UserSchema } from "./user.schema";

test("Issue representations", () => {
  new UserSchema({
    name: "foo",
    slug: "bar",
  });
});
