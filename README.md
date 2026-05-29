# Yonex x Jimmy's Badminton Shop

Mobile-first price list and order flow for Jimmy Xie's badminton stringing service.

## Local preview

Install dependencies in an environment with npm, then run:

```bash
npm install
npm run dev
```

Editable shop details and sample prices live in `src/data/shop.ts`.

The browser preview uses live CNY exchange rates from ExchangeRate-API's open endpoint and falls
back to a local estimate if the request is unavailable.
