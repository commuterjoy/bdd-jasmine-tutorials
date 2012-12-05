define('ago', function() {

     timeAgoInWords = function(epoch) {
        
        var then = new Date(Number(epoch)),
            now = new Date(), // Question. This will always return the date _now_ 
                              //    so how to write stable time dependent tests?
            delta;

        delta = parseInt((now.getTime() - then) / 1000, 10);

        if (delta < 0) { 
            return false;
        } else if (delta < 55) {
            return 'Less than a minute ago';
        } else if (delta < 90) {
            return '1 minute ago';
        } else { 
            return false; 
        }

    }

    return { 
        toString: timeAgoInWords 
    }

})
