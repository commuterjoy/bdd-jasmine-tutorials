// A common module, shared between the test and the code under test
define('common', ['mediator'], function(EventEmitter) {

    return { mediator: new EventEmitter() }

})
