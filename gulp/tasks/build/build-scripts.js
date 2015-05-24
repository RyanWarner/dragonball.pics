var gulp    = require( 'gulp' );
var gutil   = require( 'gulp-util' );

var concat  = require( 'gulp-concat' );
var uglify  = require( 'gulp-uglify' );

var path    = require( '../../paths.js' );



gulp.task( 'build-scripts', function(  )
{
	return gulp.src( path.to.scripts.source )
		.pipe( concat( path.to.scripts.main ) )
		.pipe( uglify(  ) )
		.pipe( gulp.dest( path.to.scripts.destination ) );
} );