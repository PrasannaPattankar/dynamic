export default {
  displayName: 'dashboard', // change for app2, app1 etc.
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/dashboard',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json', // ✅ explicitly point to the correct one
    },
  },
};
