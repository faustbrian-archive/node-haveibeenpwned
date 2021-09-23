**You can help the author become a full-time open-source maintainer by [sponsoring him on GitHub](https://github.com/sponsors/faustbrian).**

---

# @faustbrian/node-haveibeenpwned

[![npm version](https://badgen.net/npm/v/@faustbrian/node-haveibeenpwned)](https://npm.im/@faustbrian/node-haveibeenpwned)

## Installation

```
pnpm install @faustbrian/node-haveibeenpwned
```

## Usage

```ts
import { evaluate, pwned } from "@faustbrian/node-haveibeenpwned";

await pwned("password"); // 3_861_493

await evaluate("passwordA1%"); // true

await evaluate("password"); // false
```

## License

This is an open-sourced software licensed under the [AGPL-3.0-or-later](LICENSE).
