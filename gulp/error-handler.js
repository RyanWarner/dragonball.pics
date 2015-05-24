var gutil = require( 'gulp-util' );

module.exports =
{
	handler: function( err )
	{
		console.log( 'Error: ' +  err );
		gutil.beep(  );
		this.emit( 'end' );
	}
};
