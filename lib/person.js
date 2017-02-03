const DEFAULT_NAME = 'John Doe';

function Person( options ) {
    // Validate `options`.
    if ( !options || ( typeof options === 'object' && !options.name ) ) {
        return this.name = DEFAULT_NAME;
    }

    // Build instance.
    this.name = options.name || DEFAULT_NAME

    // Return instance.
    return this;
}

module.exports = Person;