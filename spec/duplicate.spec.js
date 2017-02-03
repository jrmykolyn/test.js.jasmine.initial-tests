var duplicate = require( '../lib/duplicate' );

describe( 'Test "duplicate()" function', function() {
    it ( 'Should return `null` when called with no args.', function() {
        expect( duplicate() ).toBe( null );
    } );


    it ( 'Should return a "duplicate" when given a "flat" object.', function() {
        var obj = { name: 'Jesse R Mykolyn', age: 27 };

        expect( duplicate( obj ).name ).toBe( 'Jesse R Mykolyn' );
    } );


    it ( 'Should return a "duplicate" when given a "nested" object.', function() {
        var obj = {
            about: {
                interests: [ 'Coding', 'Science Fiction', 'Japan' ]
            }
        };

        var dupe = duplicate( obj );

        expect( dupe.about.interests[ 0 ] ).toBe( 'Coding' );
    } );


    it ( 'Should not reflect changes made to the original/source object.', function() {
        var obj = { name: 'Jesse R Mykolyn' };
        var dupe = duplicate( obj );

        obj.name = 'John Doe';

        expect( dupe.name ).not.toBe( 'John Doe' );
    } );
} );