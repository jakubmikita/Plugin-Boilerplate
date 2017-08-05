module.exports = function(grunt) {

	grunt.initConfig( {

		makepot: {
	        target: {
	            options: {
	                cwd: '.',
	                domainPath: 'languages',
	                mainFile: 'plugin-boilerplate.php',
	                exclude: [
		                'node_modules/',
		                'vendor/',
		                '.git/'
		            ],
	                potHeaders: {
	                    poedit: true,
	                    'x-poedit-keywordslist': true
	                },
	                type: 'wp-plugin',
	                updatePoFiles: true
	            }
	        }
	    },

	    addtextdomain: {
	        options: {
	            textdomain: 'plugin-boilerplate'
	        },
	        target: {
	            files: {
	                src: [
	                    'plugin-boilerplate.php',
	                    './inc/**/*.php',
	                    './views/**/*.php'
	                ]
	            }
	        }
	    }

	} );

	grunt.loadNpmTasks( 'grunt-wp-i18n' );

	grunt.registerTask( 'textdomain', ['addtextdomain'] );

};
