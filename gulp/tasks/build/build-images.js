var gulp       = require( 'gulp' );
var gutil      = require( 'gulp-util' );

var concat     = require( 'gulp-concat' );
var uglify     = require( 'gulp-uglify' );
var minifyHTML = require( 'gulp-minify-html' );
var minifyCSS  = require( 'gulp-minify-css' );
var imagemin   = require( 'gulp-imagemin' );
var pngquant   = require( 'imagemin-pngquant' );

var path       = require( '../../paths.js' );


gulp.task( 'build-images', function (  )
{
	return gulp.src( path.to.images.source )
		.pipe( imagemin(
		{
			progressive: true,
			svgoPlugins: [ { removeViewBox: false } ],
			use: [ pngquant(  ) ]
		} ) )
		.pipe( gulp.dest( path.to.images.destination ) );
} );
