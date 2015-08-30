module.exports = function(grunt) {
  /*
  // Just playing with Grunt, leaving it here for now
  grunt.registerTask('someTask', function() {
    console.log('Running some task');
  });

  grunt.registerTask('someOtherTask', function() {
    console.log('Running some other task');
  });

  grunt.registerTask('default', ['someTask', 'someOtherTask']);
  */

  grunt.initConfig({
    copy: {
      main: {
        files: [
          // copy src/app to the build fodler
          {expand: true, cwd: 'src/app/', src: ['**'], dest: 'build/'}
        ]
      },
      jslibs: {
        files: [
          // individually copy node_modules dependencies
          // flatten true makes it copy the file in src only. Without it, it will copy the whole folder structure in node_mdules.
          {expand: true, flatten: true, src: ['node_modules/normalize.css/normalize.css'], dest: 'build/css'},
          {expand: true, flatten: true, src: ['node_modules/jquery/dist/jquery.js'], dest: 'build/js/lib'},
          {expand: true, flatten: true, src: ['node_modules/angular/angular.js'], dest: 'build/js/lib'},
          {expand: true, flatten: true, src: ['node_modules/angular-route/angular-route.js'], dest: 'build/js/lib'}
        ]
      }
    },
    // watch files for changes, and run the copy task whenever they're changed
    watch: {
      // automatically run the copy task when these files are changed
      js: {
        files: ['src/app/js/**/*.js', 'src/app/css/**/*.css', 'src/app/**/*.html'],
        tasks: ['copy'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy','watch']);
};
