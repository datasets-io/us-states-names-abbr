/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	table = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-us-states-names-abbr', function tests() {

	it( 'should export an object', function test() {
		expect( table ).to.be.an( 'object' );
		assert.strictEqual( Object.keys( table ).length, 50 );
	});

	it( 'should map state names to abbreviations', function test() {
		assert.strictEqual( table[ 'Missouri' ], 'MO' );
		assert.strictEqual( table[ 'New Jersey' ], 'NJ' );
		assert.strictEqual( table[ 'California' ], 'CA' );
	});

});
