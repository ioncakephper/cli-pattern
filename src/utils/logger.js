function createLogger(options) {
  const { verbose, debug, quiet } = options;

  const logger = {
    log: (...args) => {
      if (!quiet) {
        console.log(...args);
      }
    },
    info: (...args) => {
      if (!quiet) {
        console.info(...args);
      }
    },
    verbose: (...args) => {
      if (!quiet && (verbose || debug)) {
        console.log('[VERBOSE]', ...args);
      }
    },
    debug: (...args) => {
      if (!quiet && debug) {
        console.log('[DEBUG]', ...args);
      }
    },
    warn: (...args) => {
        if (!quiet) {
            console.warn('[WARN]', ...args);
        }
    },
    error: (...args) => {
      console.error('[ERROR]', ...args);
    },
  };

  return logger;
}

module.exports = createLogger;