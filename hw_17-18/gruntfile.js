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
        dest: 'dest/script-concat.js'
      },
      dist: {
        // the files to concatenate
        src: ['css/*.css'],
        // the location of the resulting JS file
        dest: 'dest/style-concat.css'
      }
    },
    uglify: {
      my_target: {
        files: {
          'dest/script.min.js': ['dest/script-concat.js']
        }
      }
    },
    cssmin: {
      my_target: {
        files: {
          'dest/style.min.css': ['dest/style-concat.css']
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
