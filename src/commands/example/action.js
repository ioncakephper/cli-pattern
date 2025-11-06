module.exports = async (options, logger) => {
  logger.info('Example command action executed.');
  logger.verbose('This is a verbose message for the example command.');
  logger.debug('Received options for example command:', options);
  logger.error('This is an error message for the example command.');
};
