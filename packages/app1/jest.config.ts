export default {
  displayName: 'app1',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/app1',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json', // ✅ point to correct TS config
    },
  },
};
