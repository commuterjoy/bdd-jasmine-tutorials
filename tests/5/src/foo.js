define('foo', function() {

    return {
        
        headlineChange: function(el, target) {
            el.addEventListener('click', function () {
                target.innerText = 'New Headline (clicked)';
            })
        },
        
        replace: function(el) {
            el.innerText = 'New Headline';
        }
    }

})
