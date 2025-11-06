module.exports = {
  transformDefaults: {
    BADGES: {
      style: "for-the-badge",
    },
  },
  transforms: {
    "STRUCTURE": require("markdown-magic-transform-treefile-extended"),
    ACK: require("markdown-magic-transform-acknowledgements"),
    BADGES: require("markdown-magic-transform-badges"),
  },
};