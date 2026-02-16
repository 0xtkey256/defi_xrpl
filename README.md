# DeFi XRPL

XRPL Check transaction utilities for creating, retrieving, and cashing checks on the XRP Ledger.

## Overview

A Node.js utility library implementing the [XRPL Check](https://xrpl.org/checks.html) payment mechanism — asynchronous, trustless payments similar to traditional checks on the XRP Ledger.

## Features

| Function | Description |
|----------|-------------|
| `createCheck()` | Create a check transaction promising XRP to a recipient |
| `getChecks()` | Query pending checks for an account via `account_objects` |
| `cashCheck()` | Recipient claims/deposits a check by its CheckID |

## Tech Stack

- **Runtime:** Node.js
- **Library:** [xrpl.js](https://js.xrpl.org) v2.14
- **Network:** XRPL Testnet (`wss://testnet.xrpl-labs.com`)

## Getting Started

```bash
cd scripts
npm install
```

Edit `lib/checks.js` to uncomment the function you want to run, then:

```bash
node lib/checks.js
```

## Project Structure

```
scripts/
  lib/
    checks.js    # Check transaction utilities (create, get, cash)
  package.json
```

## References

- [XRPL Checks Documentation](https://xrpl.org/checks.html)
- [xrpl.js SDK](https://js.xrpl.org)

## License

MIT License - see [LICENSE](LICENSE) for details.
