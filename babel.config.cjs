module.exports = {
  presets: [
    ['@bable/preset-env', { targets: { esmodule: true } }],
    ['@bable/preset-react', { runtime: 'automatic' }],
    '@bable/preset-typescript',
  ],
};
