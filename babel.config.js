module.exports = {
  presets: ['@rnx-kit/babel-preset-metro-react-native'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          components: './src/components',
          constants: './src/constants',
          hooks: './src/hooks',
          navigation: './src/navigation',
          routes: './src/routes',
          screens: './src/screens',
          services: './src/services',
          types: './src/types',
          configs: './src/constants',
          i18n: './src/i18n',
          views: './src/views',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
