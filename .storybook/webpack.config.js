const path = require('path')

module.exports = {
    resolve: {
        alias: {
            Utilities: path.resolve(__dirname, '../src/utilities/'),
            Global: path.resolve(__dirname, '../src/global/'),
            Elements: path.resolve(__dirname, '../src/elements/'),
            Styles: path.resolve(__dirname, '../src/styles/'),
            Components: path.resolve(__dirname, '../src/components/')
        }
    }
}
