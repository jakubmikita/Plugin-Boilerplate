///////////////
// Variables //
///////////////
var gulp         = require( 'gulp' ),
	sass         = require( 'gulp-sass' ),
	sourcemaps   = require( 'gulp-sourcemaps' ),
	autoprefixer = require( 'gulp-autoprefixer' ),
	uglify       = require( 'gulp-uglify' ),
	concat       = require( 'gulp-concat' ),
	imagemin     = require( 'gulp-imagemin' ),
	order        = require( 'gulp-order' );

var style = {
	sources: 'assets/src/sass/**/*.scss',
	target : 'assets/dist/css'
};

var script = {
	sources: 'assets/src/js/**/*.js',
	target : 'assets/dist/js'
};

var image = {
	sources: 'assets/src/images/**/*',
	target : 'assets/dist/images'
};

///////////
// Tasks //
///////////
gulp.task( 'css', function() {
	gulp.src( style.sources )
		.pipe( sourcemaps.init() )
		.pipe( sass( { outputStyle: 'compressed' } ).on( 'error', sass.logError ) )
		.pipe( autoprefixer() )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( style.target ) );
} );

gulp.task( 'js', function() {
	gulp.src( script.sources )
		.pipe( sourcemaps.init() )
		.pipe( concat( 'scripts.min.js' ) )
		.pipe( uglify() )
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest( script.target ) );
} );

gulp.task( 'img', function() {
	gulp.src( image.sources )
		.pipe( imagemin( {
			progressive: true,
			interlaced: true,
			svgoPlugins: [ { removeUnknownsAndDefaults: false }, { cleanupIDs: false } ]
		} ) )
		.pipe( gulp.dest( image.target ) );
} );

//////////////////////
// Default - Build //
/////////////////////
gulp.task( 'default', [ 'css', 'js', 'img' ] );

///////////
// Watch //
///////////
gulp.task( 'watch', function() {

	gulp.watch( style.sources, ['css'] );
	gulp.watch( script.sources, ['js'] );
	gulp.watch( image.sources, ['img'] );

} );
