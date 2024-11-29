// packages/mobile/babel.config.js
module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          'module-resolver',
          {
            alias: {
              common: '../common/src', // Asegúrate de que esta ruta sea correcta
            },
          },
        ],
      ],
    };
  };