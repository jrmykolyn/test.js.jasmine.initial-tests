// IMPORT MODULES
var duplicate = require( './duplicate' );


// DECLARE VARS
const DEFAULTS = {
    name: 'John Doe'
};


// DEFINE FUNCTIONS
function Person( options ) {
    var __data = duplicate( options );

    this.get = get.bind( __data );

    // Return instance.
    return this;
}


function get( property ) {
    return this[ property ] || DEFAULTS[ property ];
}


// EXPORT
module.exports = Person;