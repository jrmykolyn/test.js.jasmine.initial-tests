var Person = require( '../lib/person' );

describe( 'Test "Person" Constructor', function() {
    it ( 'Should require an options object.', function() {
        var person = new Person();

        expect( person.name ).toBe( 'John Doe' );
    } );
    
    it ( 'Should be anonymous if no name was provided.', function() {
        var person = new Person( { age: 27, sex: 'male' } );

        expect( person.name ).toBe( 'John Doe' );
    } );

    it ( 'Should return the name provided at initialization.', function() {
        var person = new Person( { name: 'Jesse R Mykolyn' } );

        expect( person.name ).toBe( 'Jesse R Mykolyn' );
    } );
} );