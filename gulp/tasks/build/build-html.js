var gulp       = require( 'gulp' );
var gutil      = require( 'gulp-util' );

var minifyHTML = require( 'gulp-minify-html' );

var path       = require( '../../paths.js' );

require( '../default/jade.js' );




gulp.task( 'build-html', [ 'jade' ], function(  )
{
	return gulp.src( path.to.destination + '**/*.html' )
		.pipe( minifyHTML(  ) )
		.pipe( gulp.dest( path.to.destination ) );
} );
