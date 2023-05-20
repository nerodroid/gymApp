module.exports = function (api) {
  const babelEnv = api.env();
  const plugins = [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@gym-app': ['./src'],
          '@gym-shared': ['./gym/shared'],
        },
      },
    ],
  ];

  if (babelEnv === 'production') {
    plugins.push(['transform-remove-console']);
  }

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: plugins,
  };
};
