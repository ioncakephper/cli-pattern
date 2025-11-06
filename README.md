# cli-pattern

<!-- doc-gen BADGES -->

[![npm version](https://img.shields.io/npm/v/cli-pattern.svg?style=for-the-badge)](https://www.npmjs.com/package/cli-pattern) [![npm downloads](https://img.shields.io/npm/dw/cli-pattern.svg?style=for-the-badge)](https://www.npmjs.com/package/cli-pattern) [![license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://www.npmjs.com/package/cli-pattern) [![actions status](https://img.shields.io/github/actions/workflow/status/ioncakephper/cli-pattern/ci.yml?branch=main&style=for-the-badge)](https://github.com/ioncakephper/cli-pattern/actions) [![codecov](https://img.shields.io/codecov/c/github/ioncakephper/cli-pattern?branch=main&style=for-the-badge)](https://codecov.io/gh/ioncakephper/cli-pattern) [![release](https://img.shields.io/github/v/release/ioncakephper/cli-pattern?style=for-the-badge)](https://github.com/ioncakephper/cli-pattern/releases) [![maintained](https://img.shields.io/github/commit-activity/y/ioncakephper/cli-pattern?style=for-the-badge)](https://github.com/ioncakephper/cli-pattern/graphs/commit-activity) [![stars](https://img.shields.io/github/stars/ioncakephper/cli-pattern?style=for-the-badge)](https://github.com/ioncakephper/cli-pattern/stargazers) [![forks](https://img.shields.io/github/forks/ioncakephper/cli-pattern?style=for-the-badge)](https://github.com/ioncakephper/cli-pattern/network/members) [![watchers](https://img.shields.io/github/watchers/ioncakephper/cli-pattern?style=for-the-badge)](https://github.com/ioncakephper/cli-pattern/watchers) [![last commit](https://img.shields.io/github/last-commit/ioncakephper/cli-pattern?style=for-the-badge)](https://github.com/ioncakephper/cli-pattern/commits) [![contributors](https://img.shields.io/github/contributors/ioncakephper/cli-pattern?style=for-the-badge)](https://github.com/ioncakephper/cli-pattern/graphs/contributors) [![issues](https://img.shields.io/github/issues/ioncakephper/cli-pattern?style=for-the-badge)](https://github.com/ioncakephper/cli-pattern/issues) [![pull requests](https://img.shields.io/github/issues-pr/ioncakephper/cli-pattern?style=for-the-badge)](https://github.com/ioncakephper/cli-pattern/pulls) [![repo size](https://img.shields.io/github/repo-size/ioncakephper/cli-pattern?style=for-the-badge)](https://github.com/ioncakephper/cli-pattern) [![top language](https://img.shields.io/github/languages/top/ioncakephper/cli-pattern?style=for-the-badge)](https://github.com/ioncakephper/cli-pattern) <!-- end-doc-gen -->

## Unlock Your Development Superpowers: Experience the `cli-pattern` Difference

Are repetitive tasks and inconsistent command-line interfaces stealing your peace of mind? Do you yearn for a development workflow that feels intuitive, efficient, and genuinely enjoyable? The `cli-pattern` is your pathway to clarity and calm, empowering you to reclaim control and find your development zen.

## Achieve More, Stress Less: The Tangible Triumphs of `cli-pattern`

Ready to unlock your full potential? With `cli-pattern`, you'll experience a profound impact on your development process, leading to:

- **Streamlined Development:** Rapidly build new CLI commands with a clear, consistent structure.
- **Enhanced Maintainability:** Easily understand and update existing commands, reducing technical debt.
- **Improved User Experience:** Provide your users with predictable and intuitive command-line tools.
- **Reduced Errors:** Minimize bugs through a standardized approach to command definition and execution.

## Unleash Your CLI's Full Potential: Key Features of `cli-pattern`

`cli-pattern` offers a robust set of features to empower your CLI development:

- **Modular Command Structure:** Organize your commands into distinct, manageable modules.
- **Automatic Command Loading:** Commands are automatically discovered and loaded, simplifying setup.
- **Consistent API:** A standardized interface for defining command actions, options, and arguments.
- **Built-in Logging:** Integrated logging utilities for clear feedback and debugging.
- **Extensible Design:** Easily integrate with other libraries and tools to extend functionality.
- **Clear Project Layout:** A well-defined directory structure that promotes best practices.

## Usage: Crafting Your CLI with `cli-pattern`

This section guides you on how to leverage `cli-pattern` to create new commands and options, and highlights the powerful features available out-of-the-box.

### Creating New Commands

To create a new command, follow these simple steps:

1.  **Create a new directory** under `src/commands`. The directory name will be your command name. For instance, to create a `mycommand` command, create `src/commands/mycommand/`.
2.  **Inside your new command directory, create two files:**
    - `index.js`: This file defines your command's metadata, arguments, and options using `commander.js`.
    - `action.js`: This file contains the core logic that executes when your command is called.

    Here's an example based on the `example` command:

    **`src/commands/mycommand/index.js`**

    ```javascript
    const action = require('./action');

    module.exports = (program, mergedConfig) => {
      program
        .command('mycommand')
        .description('A brief description of what mycommand does.')
        .argument('<requiredArg>', 'A required argument for mycommand.')
        .option(
          '-o, --optional-option <value>',
          'An optional option for mycommand.',
          'defaultValue'
        )
        .action(async (requiredArg, options, command) => {
          const commandConfig = mergedConfig.mycommand || {};
          const finalOptions = {
            ...mergedConfig,
            ...commandConfig,
            ...command.opts(),
            ...options,
            requiredArg,
          };
          await action(finalOptions, command.logger);
        });
    };
    ```

    **`src/commands/mycommand/action.js`**

    ```javascript
    module.exports = async (options, logger) => {
      logger.info('mycommand action executed!');
      logger.debug('Received options for mycommand:', options);
      // Your command's core logic goes here.
      // You can access arguments and options via the 'options' object.
    };
    ```

3.  **Your new command is automatically loaded!** Once these files are in place, `cli-pattern` automatically discovers and registers your `mycommand`. You can then run it from your terminal:

    ```bash
    ./bin/cli.js mycommand <value_for_requiredArg> --optional-option <value>
    ```

### Defining Options and Arguments

`cli-pattern` leverages `commander.js` for defining command-line interfaces. You can define arguments and options directly in your command's `index.js` file:

- **Arguments:** Use `.argument('<name>', 'description')` for required arguments or `[name]` for optional ones.
- **Options:** Use `.option('-s, --long-name <value>', 'description', 'defaultValue')` to define options.

Refer to the `commander.js` documentation for advanced argument and option parsing.

### Automatically Available Features

When you create commands with `cli-pattern`, you automatically benefit from:

- **Automatic Command Discovery:** No need to manually register new commands; just create the files in the correct structure.
- **Integrated Help System:** `commander.js` automatically generates comprehensive help messages for your CLI and individual commands.
- **Configurable Logging:** Utilize the `logger` object passed to your `action.js` for structured and configurable logging (`info`, `warn`, `error`, `debug`, `verbose`).
- **Configuration Merging:** Command-specific configurations are automatically merged with global settings, providing a flexible configuration hierarchy.
- **Version Display:** The CLI automatically handles displaying the version defined in your `package.json`.

## Project Structure

This section outlines the directory and file structure of the project.

<!-- doc-gen STRUCTURE root="/"-->

```
/
├── bin                        # Folder: Contains executable scripts.
│   └── cli.js                 # Executable: Main CLI entry point script.
├── config                     # Folder: Contains configuration files.
│   └── default.config.js      # Configuration: Default configuration settings.
├── src                        # Folder: Contains source code files.
│   ├── commands               # Folder: Contains definitions for CLI commands.
│   │   ├── example            # Folder: Example CLI command implementation.
│   │   │   ├── action.js      # Source Code: Action logic for the example command.
│   │   │   └── index.js       # Source Code: Definition and setup for the example command.
│   │   ├── quickly            # Folder: Quickly CLI command implementation.
│   │   │   ├── action.js      # Source Code: Action logic for the quickly command.
│   │   │   └── index.js       # Source Code: Definition and setup for the quickly command.
│   │   └── sample             # Folder: Sample CLI command implementation.
│   │       ├── action.js      # Source Code: Action logic for the sample command.
│   │       └── index.js       # Source Code: Definition and setup for the sample command.
│   ├── utils                  # Folder: Contains utility functions.
│   │   ├── loadCommands.js    # Source Code: Utility for loading CLI commands.
│   │   └── logger.js          # Source Code: Utility for logging messages.
│   └── index.js               # Source Code: Main entry point for the application source.
├── .gitignore                 # Configuration: Specifies intentionally untracked files to ignore.
├── .prettierignore            # Configuration: Specifies files to be ignored by Prettier.
├── .prettierrc.json           # Configuration: Defines Prettier formatting rules.
├── CLI_API.md                 # Documentation: Provides API reference for the CLI.
├── CONTRIBUTING.md            # Documentation: Guidelines for contributing to the project.
├── LICENSE                    # Legal: Project license information.
├── md.config.js               # Configuration: Configuration for markdown processing.
├── package-lock.json          # Dependency Management: Records the exact dependency tree.
├── package.json               # Configuration: Project metadata and dependency definitions.
├── README.md                  # Documentation: Project overview and instructions.
└── RULES_OF_CONDUCT.md        # Documentation: Defines rules of conduct for the project community.
```

<!-- end-doc-gen -->

## API Reference

For detailed information on available commands, arguments, and options, please refer to the [CLI API Documentation](CLI_API.md).

## Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

<!-- doc-gen ACK -->

- [commander](https://www.npmjs.com/package/commander) — the complete solution for node.js command-line programs
- [cosmiconfig](https://www.npmjs.com/package/cosmiconfig) — Find and load configuration from a package.json property, rc file, TypeScript module, and more!
- [markdown-magic-transform-acknowledgements](https://www.npmjs.com/package/markdown-magic-transform-acknowledgements) — A markdown-magic transform that auto-generates an Acknowledgements section for contributors, dependencies, and custom entries.
- [markdown-magic-transform-badges](https://www.npmjs.com/package/markdown-magic-transform-badges) — No description available
- [markdown-magic-transform-treefile-extended](https://www.npmjs.com/package/markdown-magic-transform-treefile-extended) — A markdown-magic transform to generate a dynamic file tree in your markdown files. This extended version provides additional options for customizing the output.
- [prettier](https://www.npmjs.com/package/prettier) — Prettier is an opinionated code formatter
- [prettier-plugin-packagejson](https://www.npmjs.com/package/prettier-plugin-packagejson) — Prettier package.json plugin to make the order of properties nice.
<!-- end-doc-gen -->
