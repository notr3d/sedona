module.exports = function(grunt) {
    grunt.initConfig({
        less: {
          dev: {
            files: {
              "css/style.css": "less/style.less"
            }
          }
        }    
    })
};