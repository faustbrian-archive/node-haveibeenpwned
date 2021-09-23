import "jest-extended";

import { evaluate, pwned } from "./index";

test("#pwned", async () => {
  await expect(pwned("password")).resolves.toBe(3_861_493);
});

test("#evaluate", async () => {
  await expect(evaluate("passwordA1%")).resolves.toBeTrue();
  await expect(evaluate("password")).resolves.toBeFalse();
});
