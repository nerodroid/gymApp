module.exports = function (api) {
  const babelEnv = api.env();
  const plugins = [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
  ];

  if (babelEnv === 'production') {
    plugins.push(['transform-remove-console']);
  }

  plugins.push('react-native-reanimated/plugin');

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: plugins,
  };
};
