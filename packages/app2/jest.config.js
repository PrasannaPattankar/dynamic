module.exports = {
  displayName: 'app2',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/app2',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json', // ✅ points to correct spec file
    },
  },
};
