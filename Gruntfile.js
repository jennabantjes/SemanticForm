module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jekyll: {
      dist: {
        src: 'app/jekyll',
        dest: 'app/jekyll/_site'
      }
    },

    copy: {
      main: {
        files: [
          {
            'expand': true,
            'cwd': 'app/jekyll/_site',
            'src': ['**/*.html'],
            'dest': 'public/'
          },
          {
            'expand': true,
            'cwd': 'app/javascripts',
            'src': 'app.js',
            'dest': 'public/javascripts'
          }
        ]
      }
    },

    sass: {
      dev: {
        src: 'app/sass/app.scss',
        dest: 'public/stylesheets/app.css',
        options: {
          style: 'expanded',
          lineNumbers: true
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>' +
          'Author: <%= pkg.author %> */'
      },
      my_target: {
        files: {
          'public/javascripts/app.min.js': ['app/javascripts/plugins/*.js', 'app/javascripts/modules/*.js', 'app/javascripts/app.js']
        }
      }
    },

    watch: {
      stylesheets: {
        files: 'app/sass/**/*.scss',
        tasks: 'sass'
      },
      jsBuilder: {
        files: ['app/javascripts/**/*.js'],
        tasks: ['uglify', 'copy']
      },
      jekyll: {
        files: ['app/jekyll/**/*.html','!app/jekyll/_site/**/*.html'],
        tasks: ['jekyll', 'copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jekyll', 'copy', 'sass', 'uglify']);
  grunt.registerTask('html', ['jekyll', 'copy']);

};
