module.exports = async (options, logger) => {
  logger.info('Sample command action executed.');
  logger.verbose('This is a verbose message for the sample command.');
  logger.debug('Received options for sample command:', options);
};
