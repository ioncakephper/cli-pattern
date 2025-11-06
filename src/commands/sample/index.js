const action = require('./action');

module.exports = (program, mergedConfig) => {
  const command = program.command('sample')
    .description('A sample command with an optional argument and several options.');

  // Optional argument
  command.argument('[optionalArg]', 'An optional argument.');

  // Several options
  command.option('--host <host>', 'Host name', 'localhost');
  command.option('-p, --port <port>', 'Port number', '8080');
  command.option('--protocol <protocol>', 'Protocol to use', 'http');

  command.action(async (optionalArg, options, command) => {
    const commandConfig = mergedConfig.sample || {};
    let finalArg = optionalArg;

    if (!finalArg && commandConfig.optionalArg) {
      finalArg = commandConfig.optionalArg;
    }

    const finalOptions = {
      ...mergedConfig,
      ...commandConfig,
      ...command.opts(),
      ...options,
      optionalArg: finalArg,
    };
    await action(finalOptions, command.logger);
  });
};
