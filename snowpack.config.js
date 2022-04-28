/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-postcss'],
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  optimize: {},
  packageOptions: {},
  devOptions: {},
  buildOptions: {},
};
