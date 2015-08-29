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
          {expand: true, src: ['src/app/**'], dest: 'build/'}
        ]
      },
      jslibs: {
        files: [
          // flatten true makes it copy the file in src only. Without it, it will copy the whole folder structure in node_mdules
          {expand: true, flatten: true, src: ['node_modules/normalize.css/normalize.css'], dest: 'build/src/app/css'},
          {expand: true, flatten: true, src: ['node_modules/jquery/dist/jquery.js'], dest: 'build/src/app/js/lib'},
          {expand: true, flatten: true, src: ['node_modules/angular/angular.js'], dest: 'build/src/app/js/lib'},
          {expand: true, flatten: true, src: ['node_modules/angular-route/angular-route.js'], dest: 'build/src/app/js/lib'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
