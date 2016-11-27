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
          },
          uglify: {
          my_target: {
            files: {
              'js/main.min.js': ['js/main.js']
            }
          }
        }
        //   browserSync: {
        //    bsFiles: {
        //     src : 'css/*.css'
        //   },
        //   options: {
        //     server: {
        //       baseDir: "./"
        //     }
        //   }
        // },
      });
    
    // These plugins provide necessary tasks.
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-browser-sync');
    
    // Default task
    grunt.registerTask('default', ['sass', 'watch', 'uglify']);

    
  };