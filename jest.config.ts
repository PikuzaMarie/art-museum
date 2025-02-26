import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.ts',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,ts,jsx,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/dist/**',
    '!**/build/**',
    '!vite.config.ts',
    '!**/coverage/**',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'setup-tests.ts',
    'vite-env.d.ts',
    'jest.config.ts',
    'eslint.config.js',
  ],
  transform: {
    '\\.[jt]sx?$': 'ts-jest',
  },
};

export default config;
