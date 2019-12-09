const presets = [
  "@babel/preset-env"
];
const presetConf = {
  "useBuiltIns": "usage",
  "corejs": "3",
  "targets": {
    "node": "4"
  }
};

module.exports = api => {
  switch (api.env()) {
    case 'test':
      return {
        "presets": [
          [
            ...presets,
            {
              ...presetConf,
              "modules": 'commonjs',
            }
          ]
        ],
        "exclude": [
          "**/scripts/**"
        ],
        "plugins": [
          ["@babel/transform-runtime"]
        ],
      };
    default:
      return {
        "presets": [
          [
            ...presets,
            {
              ...presetConf,
              "modules": false,
            }
          ]
        ],
        "exclude": [
          "**/scripts/**",
          "**/test/**"
        ],
        "sourceMaps": "inline"
      };
  }
};