/** @type {import('ts-jest').JestConfigWithTsJest} */
export const displayName = 'app2';
export const preset = 'ts-jest/presets/default-esm';
export const extensionsToTreatAsEsm = ['.ts', '.tsx'];
export const transform = {
  '^.+\\.[tj]sx?$': ['ts-jest', { useESM: true }],
};
export const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx'];
export const coverageDirectory = '../../coverage/packages/app2';
export const globals = {
  'ts-jest': {
    tsconfig: '<rootDir>/tsconfig.spec.json',
  },
};
export const testEnvironment = 'jsdom';
