const action = require('./action');

module.exports = (program, mergedConfig) => {
  program.command('example')
    .description('An example command.')
    .argument('<argument>', 'An example argument.')
    .option('-o, --option <value>', 'An example option.', 'default')
    .action(async (argument, options, command) => {
      const commandConfig = mergedConfig.example || {};
      const finalOptions = {
        ...mergedConfig,
        ...commandConfig,
        ...command.opts(),
        ...options,
        argument,
      };
      await action(finalOptions, command.logger);
    });
};