define('foo', ['common'], function(common) {

    function Something() {
    
        var view = {
            render: function() {
                common.mediator.emitEvent('modules:foo:render')
            }
        } 
    
        var model = {
            load: function() {
                setTimeout(function() { // Eg, an async call, like an XmlHttpRequest
                    view.render();
                }, 1000);
            }
        }
        
        // bind the external 'something' event to our load function 
        common.mediator.addListeners('something', [model.load]);
    
    }

    return Something;
})
