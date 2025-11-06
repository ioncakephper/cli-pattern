module.exports = {
    transformDefaults: {
        BADGES: {
            style: "for-the-badge"
        }
    },
    transforms: {
        BADGES: require('markdown-magic-transform-badges')
    }
}