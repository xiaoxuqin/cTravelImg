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
        copy: {
            img: {
                src:['img/*.{png, jpg, gif}'],
                dest: 'dist/'
            }
        }        
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['clean','copy', 'cssmin', 'htmlmin']);
}
