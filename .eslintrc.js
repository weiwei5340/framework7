module.exports = {
  'extends': 'airbnb-base',
  'plugins': [
    "import"
  ],
  'globals': {
    "window": true,
    "document": true,
    "XMLHttpRequest": true,
    "Blob": true,
    "Document": true,
    "FormData": true,
  },
  rules: {
    'max-len': ['error', 1000, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
  },
};