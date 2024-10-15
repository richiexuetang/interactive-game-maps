module.exports = {
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/apps/server/**/*spec.ts'],
    transform: {
        '^.+\\.(t|j)s$': [
            'ts-jest',
            {
                tsconfig: '<rootDir>/tsconfig.app.json',
                ignoreCodes: ['TS151001'],
            },
        ],
    },
    collectCoverage: true,
};