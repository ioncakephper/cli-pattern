module.exports = async (options, logger) => {
  logger.info('Quickly command action executed.');
  logger.verbose('This is a verbose message for the quickly command.');
  logger.debug('Received options for quickly command:', options);
  // logger.error('This is an error message for the quickly command.');
};
