function duplicate( input ) {
    if ( !input ) { return null; }

    var output = {};

    for ( let key in input ) {
        if ( typeof input[ key ] !== 'object' ) {
            output[ key ] = input[ key ];
        } else {
            output[ key ] = duplicate( input[ key ] );
        }
    }

    return output;
}


module.exports = duplicate;