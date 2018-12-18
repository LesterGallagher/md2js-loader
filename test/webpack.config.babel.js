const path = require('path');

module.exports = {
    context: __dirname,
    mode: 'development',
    output: {
        path: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.md$/,
            use: {
                loader: path.resolve(__dirname, '../index'),
            }
        }]
    }
}
