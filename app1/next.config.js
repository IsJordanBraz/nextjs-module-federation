const {
  withModuleFederation,
  MergeRuntime,
} = require("@module-federation/nextjs-mf");
const path = require("path");
const slash = require("slash");

module.exports = {
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const mfConf = {
      name: "app1",
      library: { type: config.output.libraryTarget, name: "app1" },
      filename: "static/runtime/remoteEntry.js",
      remotes: {
        // For SSR, resolve to disk path (or you can use code streaming if you have access)
        app: isServer
          ? slash(path.resolve(
              __dirname,
              "../app/.next/server/static/runtime/remoteEntry.js"
            ))
          : "app", // for client, treat it as a global
      },
      exposes: {},
      shared: [],
    };

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    if (!isServer) {
      config.output.publicPath = "http://localhost:3001/_next/";
    }

    config.plugins.push(new MergeRuntime());

    return config;
  },
};
