module.exports = function (api) {
    api.cache(true);

    return {
        'presets': [
            [
                '@babel/preset-env', { 
                    'targets': {
                        'node': 'current',
                        'esmodules': true,
                    },
                    'modules': 'commonjs',
                },
            ],
            '@babel/preset-typescript',
        ],
    };
};
