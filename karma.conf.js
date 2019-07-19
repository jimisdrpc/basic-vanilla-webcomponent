module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["fixture", "jasmine"],
    files: [
      "node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
      {
        pattern: "**/*.test-with-openwc.js",
        type: "module",
        included: true
      },
      { pattern: "**/*.js", type: "module", included: false }
    ],
    esm: {
      nodeResolve: true
    },
    exclude: [],
    preprocessors: {},
    reporters: ["spec"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: true,
    concurrency: Infinity
  });
};
