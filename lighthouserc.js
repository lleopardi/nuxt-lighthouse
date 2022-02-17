module.exports = {
    ci: {
      collect: {
        startServerCommand: 'npm run build && npm run start',
        url: ['http://localhost:3000']
      },
      assert: {
        assertions: {
          'categories:performance': ['warn', {minScore: 1}],
          'categories:accessibility': ['error', {minScore: 1}]
        }
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };