module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    clean: ['compressed/*', 'output/*'],
    svgmin: { //minimize SVG files
      options: {
        plugins: [
            { removeViewBox: false },
            { removeUselessStrokeAndFill: false },
            { convertShapeToPath: true }
        ]
      },
      dist: {
        expand: true,
        cwd: 'raw',
        src: ['*.svg'],
        dest: 'compressed',
        ext: '.colors-light-danger-success.svg'
      }
    },
    grunticon: {
      myIcons: {
          files: [{
            expand: true,
            cwd: 'compressed/',
            src: ['*.svg', '*.png'],
            dest: "output"
          }],
        options: {
          loadersnippet: "grunticon.loader.js",
          colors: {
            light: '#ccc',
            danger: '#ed3921',
            success: '#8DC63F'
          }
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.registerTask('default', ['clean', 'svgmin', 'grunticon:myIcons']);
};