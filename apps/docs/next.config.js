const withTM = require("next-transpile-modules")(["ui", "react-native"]);

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
