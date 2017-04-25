module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // project settings
    project: {
      build: 'build',
      source: 'source',
      preview: 'preview',
      css: 'sass'
    },
    // task settings
    clean: {
      combined_js: {
        files: {
          src: ['<%= project.source %>/concat']
        }
      },
      preview: {
        files: {
          src: ['<%= project.preview %>/**']
        }
      },
      build: {
        files: {
          src: ['<%= project.build %>/**']
        }
      }
    },
    compass: {
      compile: {
        options: {
          httpPath: '<%= project.source %>',
          cssDir: '<%= project.source %>/css',
          sassDir: '<%= project.source %>/sass',
          imagesDir: '<%= project.source %>/img',
          relativeAssets: true
            //force: false
        }
      }
    },
    compress: {
      main: {
        options: {
          archive: 'build.zip'
        },
        files: [{
          expand: true,
          src: '**/*',
          cwd: '<%= project.build %>'
        }]
      }
    },
    // use this task to combine JS files like they were being combined in Ruby
    concat: {
      libs: {
        src: [
          '<%= project.source %>/bower_components/jquery/dist/jquery.min.js',
          '<%= project.source %>/bower_components/underscore/underscore.min.js',
          '<%= project.source %>/bower_components/responsejs/response.min.js',
          '<%= project.source %>/js/lib/appendAround.js',
          '<%= project.source %>/js/lib/jquery.disablescroll.min.js',
          '<%= project.source %>/bower_components/select2/dist/js/select2.full.min.js',
          '<%= project.source %>/bower_components/owlcarousel/owl-carousel/owl.carousel.min.js'
        ],
        dest: '<%= project.source %>/js/concat/libs.js'
      },
      define: {
        src: [
          '<%= project.source %>/js/app/define.js',
          '<%= project.source %>/js/app/registerView.js'
        ],
        dest: '<%= project.source %>/js/concat/setup.js'
      },
      components: {
        src: [
          '<%= project.source %>/components/main_header/clientlibs/main_header.js',
          '<%= project.source %>/components/main_menu/clientlibs/main_menu.js',
          '<%= project.source %>/components/thumbs_slider_component/clientlibs/thumbs_slider_component.js',
          '<%= project.source %>/components/top_slider_component/clientlibs/top_slider_component.js',
          '<%= project.source %>/components/product_table_component/clientlibs/product_table_component.js',
          '<%= project.source %>/components/begin_component/clientlibs/begin_component.js',
          '<%= project.source %>/components/bottom_slider_component/clientlibs/bottom_slider_component.js',
          '<%= project.source %>/components/home_content_component/clientlibs/home_content_component.js',
          '<%= project.source %>/components/product_list_component/clientlibs/product_list_component.js',
          '<%= project.source %>/components/about_component/clientlibs/about_component.js',
          '<%= project.source %>/components/success_stories_component/clientlibs/success_stories_component.js',
          '<%= project.source %>/components/contact_agent_component/clientlibs/contact_agent_component.js',
          '<%= project.source %>/components/map_component/clientlibs/map_component.js',
          '<%= project.source %>/components/contact_us_component/clientlibs/contact_us_component.js',
          '<%= project.source %>/components/resident_property_component/clientlibs/resident_property_component.js',
          '<%= project.source %>/components/property_component/clientlibs/property_component.js',
          '<%= project.source %>/components/property_popup_component/clientlibs/property_popup_component.js',
          '<%= project.source %>/components/signup_popup_component/clientlibs/signup_popup_component.js',
          '<%= project.source %>/components/setting_popup_component/clientlibs/setting_popup_component.js',
          '<%= project.source %>/components/success_popup_component/clientlibs/success_popup_component.js',
          '<%= project.source %>/components/apply_popup_component/clientlibs/apply_popup_component.js',
          '<%= project.source %>/components/blog_component/clientlibs/blog_component.js',
          '<%= project.source %>/components/our_agents_component/clientlibs/our_agents_component.js',
          '<%= project.source %>/components/career_component/clientlibs/career_component.js'
        ],
        dest: '<%= project.source %>/js/concat/components.js'
      },
      all: {
        src: [
          '<%= project.source %>/js/concat/libs.js',
          '<%= project.source %>/js/concat/setup.js',
          // need to create EIR object and define and renderView methods here
          '<%= project.source %>/js/concat/components.js'
        ],
        dest: '<%= project.preview %>/js/combined.js' // send combined.js to preview
      },
    },
    connect: {
      server: {
        options: {
          base: '<%= project.preview %>',
          // hostname: '10.22.132.93',
          port: grunt.option('serverPort') || 3000
        }
      }
    },
    copy: {
      html: {
        files: [{
          expand: true,
          flatten: true,
          cwd: '<%= project.source %>',
          src: [
            '*.html',
            'rendered-html/**'
          ],
          dest: '<%= project.preview %>',
          filter: 'isFile'
        }]
      },
      css: {
        files: [{
          expand: true,
          cwd: '<%= project.source %>/css',
          src: '*.css',
          dest: '<%= project.preview %>/css',
          filter: 'isFile'
        }]
      },
      scripts: {
        files: [{
          expand: true,
          cwd: '<%= project.source %>/bower_components/modernizr/',
          src: [
            'modernizr.js'
          ],
          dest: '<%= project.preview %>/js/lib/',
          filter: 'isFile'
        }]
      },
      fonts: {
        files: [{
          expand: true,
          cwd: '<%= project.source %>/fonts/',
          src: '**',
          dest: '<%= project.preview %>/fonts/',
          filter: 'isFile'
        }]
      },
      build: {
        files: [{
          expand: true,
          cwd: '<%= project.preview %>',
          src: '**',
          dest: '<%= project.build %>',
          filter: 'isFile'
        }]
      }
    },
    ejs_static: {
      preview: {
        options: {
          dest: '<%= project.source %>/rendered-html/',
          path_to_data: '<%= project.source %>/data/data.json',
          path_to_layouts: '<%= project.source %>',
          parent_dirs: false,
          underscores_to_dashes: true,
          file_extension: '.html'
        }
      }
    },
    imagemin: {
      dynamic: {
        options: {
          svgoPlugins: [{ removeViewBox: false }],
        },
        files: [{
          expand: true,
          cwd: '<%= project.source %>/img',
          src: [
            '**/*.{png,jpg,gif}',
            '!icons/**',
            '!icons-2x/**',
            '!_from-refresh/**',
            '!**/*.psd'
          ],
          dest: '<%= project.preview %>/img'
        }]
      }
    },
    svgmin: { //minimize SVG files
      options: {
          plugins: [
              { removeViewBox: true },
              { removeUselessStrokeAndFill: true }
          ]
      },
      dist: {
          expand: true,
          cwd: '<%= project.source %>/img',
          src: ['*.svg'],
          dest: '<%= project.preview %>/img'
          //ext: '.colors-light-danger-success.svg'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '<%= project.source %>/css',
          src: ['*.css', '!*.min.css'],
          dest: '<%= project.preview %>/css',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      styles: {
        files: ['<%= project.source %>/**/*.scss'],
        tasks: ['compass', 'copy:css'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: [
          '<%= project.source %>/**/*.js',
          '!<%= project.source %>/js/concat/**'
        ],
        tasks: ['concat']
      },
      templates: {
        files: [
          '<%= project.source %>/pages/**',
          '<%= project.source %>/components/**'
        ],
        tasks: ['ejs_static:preview', 'copy:html']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      options: {
        livereload: true
      }
    }
  });

  /**
   * Load Grunt plugins
   */
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ejs-static');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', [
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('develop', [
    'clean:combined_js',
    'clean:preview',
    'compass',
    'concat',
    'ejs_static',
    'imagemin',
    'svgmin',
    'copy:html',
    'copy:css',
    'copy:scripts',
    'copy:fonts',
    'connect:server',
    'cssmin',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'compass',
    'concat',
    'ejs_static',
    'imagemin',
    'svgmin',
    'copy',
    'cssmin'
  ]);
};
