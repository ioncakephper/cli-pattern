# CLI Project Script Reference

This document outlines the various scripts available in this project, categorized for easy navigation and understanding. These scripts automate common development tasks, from documentation generation to code formatting and linting.

<!-- doc-gen SCRIPTS format=list -->

- `docs` — Generates and updates markdown documentation files. (line [39](./package.json#L39))

  ```bash
  npx markdown-magic@3.7.0 **/*.md -c md.config.js
  ```

- `format` — Formats all code files using Prettier. (line [40](./package.json#L40))

  ```bash
  prettier --write .
  ```

- `format:packagejson` — Formats the package.json file using Prettier. (line [41](./package.json#L41))

  ```bash
  prettier --write package.json
  ```

- `postinstall` — Runs after npm install to generate documentation. (line [42](./package.json#L42))

  ```bash
  npm run docs
  ```

- `postuninstall` — Runs after npm uninstall to update documentation. (line [45](./package.json#L45))

  ```bash
  npm run docs
  ```

- `precommit` — Runs docs and format tasks before commit. (line [43](./package.json#L43))

  ```bash
  npm run docs && npm run format
  ```

- `test` — Runs tests for the project. (line [44](./package.json#L44))

  ```bash
  jest --passWithNoTests
  ```

  <!-- end-doc-gen -->
