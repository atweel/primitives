// https://jestjs.io/docs/en/configuration#globalteardown-string
const path = require('path');
const glob = require('glob');
const fs = require('fs');

module.exports = async () => {
    console.log('Performing global test teardown...');

    for (const file of glob.sync('*.tgz', { cwd: path.resolve(__dirname, '../..'), absolute: true })) {
        fs.unlinkSync(file);
    }
};
