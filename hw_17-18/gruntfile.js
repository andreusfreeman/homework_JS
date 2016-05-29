module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: ['js/*.js'],
        // the location of the resulting JS file
        dest: 'js/script-concat.js'
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);

};
