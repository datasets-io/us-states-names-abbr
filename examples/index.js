'use strict';

var table = require( './../lib' );

function getAbbr( state ) {
	var parts,
		abbr,
		len,
		i;

	// Ensure the first letter of each word comprising a state name is capitalized...
	parts = state.split( ' ' );
	len = parts.length;
	state = '';
	for ( i = 0; i < len; i++ ) {
		state += parts[ i ][ 0 ].toUpperCase() + parts[ i ].substring( 1 );
		if ( i < len-1 ) {
			state += ' ';
		}
	}
	// Get the state abbreviation:
	abbr = table[ state ];

	// Ensure a valid state name was provided...
	if ( abbr === void 0 ) {
		throw new Error( 'unrecognized state name. Value: `' + state + '`.' );
	}
	return abbr;
}

console.log( getAbbr( 'Missouri' ) );
console.log( getAbbr( 'New Jersey' ) );
console.log( getAbbr( 'California' ) );
