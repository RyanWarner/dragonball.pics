var gulp       = require( 'gulp' );
var gutil      = require( 'gulp-util' );

var sass       = require( 'gulp-sass' );
var prefix     = require( 'gulp-autoprefixer' );

var minifyHTML = require( 'gulp-minify-html' );
var minifyCSS  = require( 'gulp-minify-css' );

var path       = require( '../../paths.js' );
var error      = require( '../../error-handler.js' );



gulp.task( 'build-css', function(  )
{
	return gulp.src( path.to.sass.main )
		.pipe( sass(  ) )
		.on( 'error', error.handler  )
		.pipe( prefix( 'last 2 versions', { cascade: true } ) )
		.on( 'error', error.handler )
		.pipe( minifyCSS(  ) )
		.pipe( gulp.dest ( path.to.sass.destination ) );
} );
