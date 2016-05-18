module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
    build: {
        src: 'js/*.js',
        dest: 'js/main.min.js'
      }
    },
    concat: {
        build: {
            src: 'js/*.js',
            dest: 'js/main.min.js'
        }
    }
 
  });

 grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');



  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};