module.exports = {
  transformDefaults: {
    BADGES: {
      style: 'for-the-badge',
    },
    STRUCTURE: {
      // showSize: true,
      showDescriptions: true,
      ignore: ['node_modules', '.github', '.qodo', '.git', 'git'],
      descriptions: {
        '.gitignore':
          'Configuration: Specifies intentionally untracked files to ignore.',
        '.prettierignore':
          'Configuration: Specifies files to be ignored by Prettier.',
        '.prettierrc.json': 'Configuration: Defines Prettier formatting rules.',
        'CLI_API.md': 'Documentation: Provides API reference for the CLI.',
        'cli-pattern.config.js':
          'Configuration: Main configuration file for the CLI pattern.',
        'CONTRIBUTING.md':
          'Documentation: Guidelines for contributing to the project.',
        LICENSE: 'Legal: Project license information.',
        'md.config.js': 'Configuration: Configuration for markdown processing.',
        'package-lock.json':
          'Dependency Management: Records the exact dependency tree.',
        'package.json':
          'Configuration: Project metadata and dependency definitions.',
        'README.md': 'Documentation: Project overview and instructions.',
        'RULES_OF_CONDUCT.md':
          'Documentation: Defines rules of conduct for the project community.',
        '.github':
          'Folder: Contains GitHub specific configurations and workflows.',
        '.github/ISSUE_TEMPLATE': 'Folder: Templates for GitHub issues.',
        '.github/ISSUE_TEMPLATE/bug_report.md':
          'Template: Template for reporting bugs.',
        '.github/ISSUE_TEMPLATE/feature_request.md':
          'Template: Template for requesting new features.',
        '.github/ISSUE_TEMPLATE/question.md':
          'Template: Template for asking questions.',
        '.github/workflows': 'Folder: GitHub Actions workflow definitions.',
        '.github/workflows/npm-publish.yml':
          'Workflow: GitHub Actions workflow for publishing to npm.',
        '.qodo': 'Folder: Contains Qodo specific configurations.',
        '.qodo/agents': 'Folder: Qodo agent definitions.',
        '.qodo/workflows': 'Folder: Qodo workflow definitions.',
        bin: 'Folder: Contains executable scripts.',
        'bin/cli.js': 'Executable: Main CLI entry point script.',
        config: 'Folder: Contains configuration files.',
        'config/default.config.js':
          'Configuration: Default configuration settings.',
        src: 'Folder: Contains source code files.',
        'src/index.js':
          'Source Code: Main entry point for the application source.',
        'src/commands': 'Folder: Contains definitions for CLI commands.',
        'src/commands/example': 'Folder: Example CLI command implementation.',
        'src/commands/example/action.js':
          'Source Code: Action logic for the example command.',
        'src/commands/example/index.js':
          'Source Code: Definition and setup for the example command.',
        'src/commands/quickly': 'Folder: Quickly CLI command implementation.',
        'src/commands/quickly/action.js':
          'Source Code: Action logic for the quickly command.',
        'src/commands/quickly/index.js':
          'Source Code: Definition and setup for the quickly command.',
        'src/commands/sample': 'Folder: Sample CLI command implementation.',
        'src/commands/sample/action.js':
          'Source Code: Action logic for the sample command.',
        'src/commands/sample/index.js':
          'Source Code: Definition and setup for the sample command.',
        'src/utils': 'Folder: Contains utility functions.',
        'src/utils/loadCommands.js':
          'Source Code: Utility for loading CLI commands.',
        'src/utils/logger.js': 'Source Code: Utility for logging messages.',
      },
    },
  },
  transforms: {
    STRUCTURE: require('markdown-magic-transform-treefile-extended'),
    ACK: require('markdown-magic-transform-acknowledgements'),
    BADGES: require('markdown-magic-transform-badges'),
  },
};
