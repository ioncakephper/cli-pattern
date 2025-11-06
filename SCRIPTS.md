# CLI Project Script Reference

This document outlines the various scripts available in this project, categorized for easy navigation and understanding. These scripts automate common development tasks, from documentation generation to code formatting and linting.

<!-- doc-gen SCRIPTS format=list -->

- `docs` — Generates and updates markdown documentation files. (line [36](./package.json#L36))

  ```bash
  npx markdown-magic@3.7.0 **/*.md -c md.config.js
  ```

- `format` — Formats all code files using Prettier. (line [37](./package.json#L37))

  ```bash
  prettier --write .
  ```

- `format:packagejson` — Formats the package.json file using Prettier. (line [38](./package.json#L38))

  ```bash
  prettier --write package.json
  ```

- `postinstall` — Runs after npm install to generate documentation. (line [34](./package.json#L34))

  ```bash
  npm run docs
  ```

- `postuninstall` — Runs after npm uninstall to update documentation. (line [35](./package.json#L35))

  ```bash
  npm run docs
  ```

- `precommit` — Runs docs and format tasks before commit. (line [40](./package.json#L40))

  ```bash
  npm run docs && npm run format
  ```

- `test` — Runs tests for the project. (line [39](./package.json#L39))

  ```bash
  jest --passWithNoTests
  ```

  <!-- end-doc-gen -->
