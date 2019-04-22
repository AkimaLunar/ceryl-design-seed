const path = require('path')

module.exports = {
    resolve: {
        alias: {
            Blocks: path.resolve(__dirname, '../src/blocks/'),
            Components: path.resolve(__dirname, '../src/components/'),
            Constructs: path.resolve(__dirname, '../src/constructs/'),
            Elements: path.resolve(__dirname, '../src/elements/'),
            Global: path.resolve(__dirname, '../src/global/'),
            Symbols: path.resolve(__dirname, '../src/symbols/'),
            Utilities: path.resolve(__dirname, '../src/utilities/')
        }
    }
}
