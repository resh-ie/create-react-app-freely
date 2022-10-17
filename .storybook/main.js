const path = require('path');

const toPath = filePath => path.join(process.cwd(), filePath);

module.exports = {
  webpackFinal: async config => {
    return { ...config,
      resolve: { ...config.resolve,
        alias: { ...config.resolve.alias
        }
      }
    };
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss'],
  framework: '@storybook/react',
  staticDirs: [{
    from: '../public',
    to: '/'
  }],
  core: {
    builder: 'webpack5'
  }
};