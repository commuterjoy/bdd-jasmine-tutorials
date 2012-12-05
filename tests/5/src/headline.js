define('headline', function() {

    return {
        
        bindReplaceToEvent: function(el, target) {

            (function(that){
                el.addEventListener('click', function () {
                    that.replace(target, ' - clicked') 
                })
            })(this)
            
        },
        
        replace: function(el, text) {
       
            var additionalText = text || ''; 
            el.innerText = el.innerText + ' | guardian.co.uk' + additionalText;
        
        }
    }

})
