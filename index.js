function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    const func = function func() {}
    return func 
}

function returnsAnAnonymousFunction() {
    return(() => 1 + 2)
}