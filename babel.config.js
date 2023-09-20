module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'react-native-reanimated/plugin',
            'module:react-native-dotenv',
            'expo-router/babel',
            'nativewind/babel',
            [
                'module-resolver',
                {
                    root: ['.'],
                    alias: {
                        '@redux': './src/redux',
                        '@components': './src/components',
                        '@translations': './src/translations',
                        '@assets': './src/assets',
                        '@utils': './src/utils'
                    }
                }
            ]
        ]
    };
};
