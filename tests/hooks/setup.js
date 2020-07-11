// https://jestjs.io/docs/en/configuration#globalsetup-string
const childProcess = require('child_process');
const path = require('path');

module.exports = async () => {
    console.log('Performing global test setup...');

    childProcess.execSync('yarn pack', {
        cwd: path.resolve(__dirname, '../../package'),
    });
};

