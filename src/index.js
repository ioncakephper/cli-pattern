const { Command } = require('commander');
const { cosmiconfig } = require('cosmiconfig');
const path = require('path');
const packageJson = require('../package.json');
const loadCommands = require('./utils/loadCommands');
const createLogger = require('./utils/logger');

const program = new Command();

async function run() {
  // const moduleName = packageJson.name;
  const {name = 'cli', version = '1.0.0', description = 'A CLI application'} = packageJson;
  const explorer = cosmiconfig(name);

  let config;
  try {
    const result = await explorer.search();
    config = result ? result.config : {};
  } catch (error) {
    console.error('Error loading configuration:', error);
    config = {};
  }

  const defaultConfig = require('../config/default.config.js');
  const mergedConfig = { ...defaultConfig, ...config };

  program
    .name(name)
    .version(version)
    .description(description)
    .option('-v, --verbose', 'Enable verbose logging')
    .option('-d, --debug', 'Enable debugging output')
    .option('--quiet', 'Suppress all non-error output')
    .option('-c, --config <file>', 'Specify config file path');

  loadCommands(program, mergedConfig);

  program.hook('preAction', (thisCommand, actionCommand) => {
    const commandOptions = thisCommand.opts();
    const loggerOptions = { ...mergedConfig, ...commandOptions };
    actionCommand.logger = createLogger(loggerOptions);
  });

  program.configureHelp({
    sortSubcommands: true,
    sortOptions: true,
    })


  if (process.argv.length <= 2) {
    program.help();
  } else {
    await program.parseAsync(process.argv);
  }
}

module.exports = { run };