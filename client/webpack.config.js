const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    // ... your other Webpack configuration options

    plugins: [
        // ... your other plugins
        new NodePolyfillPlugin()
    ]
};
