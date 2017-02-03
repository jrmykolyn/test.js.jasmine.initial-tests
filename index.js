// --------------------------------------------------
// NOTES:
// --------------------------------------------------
/*
Using 'index.js' as an entrypoint for Jasmine testing is *not* required.

Provided a correctly configured 'jasmine.json' file exists within the project's file structure,
running the `jasmine` command from the root of the project will start the testing process.

However, by configuring a new Jasmine instance within `index.js`, we're able to achieve the
same result by calling `node index.js`.
*/


// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
var Jasmine = require( 'jasmine' );


// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
var jasmine = new Jasmine();


// --------------------------------------------------
// DO PROGRAM
// --------------------------------------------------
jasmine.loadConfigFile( './spec/support/jasmine.json' );

jasmine.onComplete( ( passed ) => {
    if ( passed ) {
        console.log( 'All tests passed, congratulations!' );
    } else {
        console.log( 'Whoops! Looks like some of your tests didn\'t pass' );
    }
} );

jasmine.execute();