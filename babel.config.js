module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            components: './components',
            assets: './assets',
            hooks: './hooks',
            routes: './routes',
            screens: './screens',
            design: './design',
            store: './store',
            theme: './theme',
          },
          extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js'],
        },
      ],
      'react-native-reanimated/plugin',
      // eslint-disable-next-line no-undef
      require.resolve('expo-router/babel'),
    ],
  };
};
