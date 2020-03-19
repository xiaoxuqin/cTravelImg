module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            src: "dist/"
        },
        htmlmin:{
            options:{
                removeComments:true,
                collapseWhitespace:true
            },
            files:{
                src:'img.html',
                dest:'dist/img.html'
            }
        },
        cssmin:{
            'dist/img.css':'img.css'
        },
        imagemin:{
            dist:{
                options:{
                    optimizationLevel:1
                },
                files:[{
                    expand:true,
                    cwd:'./img',
                    src:['**/*.{png,jpg,jpeg}'],
                    dest:'dist/img/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
   
    grunt.registerTask('default', ['clean','imagemin','cssmin', 'htmlmin']);
}
