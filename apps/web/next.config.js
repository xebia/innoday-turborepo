const withTM = require("next-transpile-modules")(["react-native", "ui"]);

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
    };

    return config;
  },
});
