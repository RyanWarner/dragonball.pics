'use strict';

DomReady.ready( function(  )
{
	var navElement = document.getElementsByClassName( 'nav' )[ 0 ];
	var toggleNavButton = document.getElementsByClassName( 'nav-toggle' )[ 0 ];

	var toggleNav = function(  )
	{
		navElement.classList.toggle( 'hidden' );
		toggleNavButton.classList.toggle( 'collapsed' );
	};

	toggleNavButton.addEventListener( 'click', toggleNav, false );
} );