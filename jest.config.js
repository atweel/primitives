const { pathsToModuleNameMapper } = require('ts-jest/utils');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig');

const path = require('path');

module.exports = {
    globalSetup: './tests/hooks/setup.js',
    globalTeardown: './tests/hooks/teardown.js',
    // resolver: './tests/hooks/resolve.js',
    preset: 'ts-jest',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: __dirname + '/'
    }),
};
