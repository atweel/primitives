// https://jestjs.io/docs/en/configuration#resolver-string
const path = require('path');

module.exports = (name, options) => {
    if (name === '@atweel/primitives') {
        return path.resolve(__dirname, '../../library/exports.js');
    } else {
        return options.defaultResolver(name, options);
    }
};
