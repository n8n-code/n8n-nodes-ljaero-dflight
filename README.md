# @n8n-dev/n8n-nodes-ljaero-dflight

![ljaero-dflight Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-ljaero-dflight.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-ljaero-dflight)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing ljaero-dflight API integrations by hand.**

Every time you connect n8n to ljaero-dflight, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to ljaero-dflight took 5 minutes, not half a day?**

This node gives you **8+ resources** out of the box: **Airspace**, **Weather**, **Flight Restrictions**, **Special Security Areas**, **Restricted Public Venues**, and 3 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-ljaero-dflight
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-ljaero-dflight`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **ljaero-dflight API** → paste your API key
3. Drag the **ljaero-dflight** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Airspace</b> (3 operations)</summary>

- Post Retrieve all requested types of airspace located within given distance of location
- Post Retrieve all requested types of airspace located within given GeoJSON Polygon
- Post Retrieve all requested types of airspace traversed by route

</details>

<details>
<summary><b>Weather</b> (3 operations)</summary>

- Post Retrieve forecast values within given distance of location for all requested weather elements and time periods
- Post Retrieve forecast values within given GeoJSON polygon for all requested weather elements and time periods
- Post Retrieve forecast values along a route for all requested weather elements and time periods

</details>

<details>
<summary><b>Flight Restrictions</b> (3 operations)</summary>

- Post Retrieve flight restrictions applicable within given distance of location
- Post Retrieve flight restrictions applicable within given area
- Post Retrieve flight restrictions applicable along route

</details>

<details>
<summary><b>Special Security Areas</b> (3 operations)</summary>

- Post Retrieve all special security areas located within given distance of location
- Post Retrieve all special security areas located within given GeoJSON Polygon
- Post Retrieve all special security areas traversed by route

</details>

<details>
<summary><b>Restricted Public Venues</b> (3 operations)</summary>

- Post Retrieve all restricted public venues located within given distance of location
- Post Retrieve all restricted public venues located within given GeoJSON Polygon
- Post Retrieve all restricted public venues traversed by route

</details>

<details>
<summary><b>Surface Obstacles</b> (3 operations)</summary>

- Post Retrieve obstacles within given distance of location
- Post Retrieve obstacles located within given area
- Post Retrieve obstacles found along a route

</details>

<details>
<summary><b>Aerodromes</b> (3 operations)</summary>

- Post Retrieve aerodromes within given distance of location
- Post Retrieve aerodromes located within given area
- Post Retrieve aerodromes found along a route

</details>

<details>
<summary><b>UAS Operating Areas</b> (3 operations)</summary>

- Post Retrieve UAS Operating Areas UOAs found within given distance of location
- Post Retrieve UAS Operating Areas UOAs found within given area
- Post Retrieve UAS Operating Areas UOAs found along route

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from ljaero-dflight docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official ljaero-dflight OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **ljaero-dflight** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the ljaero-dflight API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
