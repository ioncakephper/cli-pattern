const action = require('./action');

module.exports = (program, mergedConfig) => {
  program
    .command('quickly')
    .description('A command with an optional argument with a default value.')
    .argument('[location]', 'The location to use.', 'local') // Default is 'local'
    .action(async (location, options, command) => {
      // console.log(command);
      const commandConfig = mergedConfig.quickly || {};

      const finalOptions = {
        ...mergedConfig,
        ...commandConfig,
        ...command.opts(),
        ...options,
        location: location, // The argument from commander.
      };
      await action(finalOptions, command.logger);
    });
};
