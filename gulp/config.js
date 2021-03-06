export default {
  build: 'client/build',
  source: 'client/app',
  views: {
    index: 'client/app/index.html'
  },
  scripts: {
    sourceFile: 'client/app/js/main.js',
    prodFile: 'client/build/js/main.js',
    sourceGlob: 'client/app/js/**/*.js'
  },
  style: {
    sourceGlob: 'client/app/style/**/*.scss',
    sourceFile: 'client/app/style/main.scss',
    dest: 'client/build/style'
  }
};
