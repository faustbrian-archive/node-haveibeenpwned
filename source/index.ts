import { sync as sha1 } from "simple-sha1";
import fetch from "cross-fetch";

export const pwned = async (password: string): Promise<number> => {
  const hashedPassword: string = sha1(password);

  const matches: RegExpExecArray | null = new RegExp(
    `${hashedPassword.slice(5).toUpperCase()}:(\\d+)`,
  ).exec(
    await (await fetch(
      `https://api.pwnedpasswords.com/range/${hashedPassword.slice(0, 5)}`,
    )).text(),
  );

  if (matches && matches[1]) {
    return Number.parseInt(matches[1]);
  }

  return 0;
};

export const evaluate = async (password: string): Promise<boolean> => {
  if (await pwned(password)) {
    return false;
  }

  return new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])(?=.{8,})",
  ).test(password);
};
