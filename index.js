function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    const namedFunct = function() {};
    return namedFunct;
}

function returnsAnAnonymousFunction() {
    return function() {};
}