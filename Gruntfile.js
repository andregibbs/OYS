module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
 
    
        sass: {                              // Task
            dist: {                            // Target
              options: {                       // Target options
                style: 'expanded'
              },
              files: {                         // Dictionary of files
                'css/main.css': 'sass/main.scss'       // 'destination': 'source'
              }
            }
        },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
    });
 
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task
    grunt.registerTask('default', ['sass', 'watch']);
 
};