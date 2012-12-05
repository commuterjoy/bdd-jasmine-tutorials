// Load the AMD module called 'foo' and assign to variable 'bar' 
curl(['foo']).then( function  (bar) { 

    describe("Module #3", function() {

            it("should load an AMD module", function() {
                expect(bar).toBeDefined(); // And test it has been loaded
            });

        })
    },
    function(e) {
        console.log('Something has gone wrong here with the curl.js loading', e);
    }
);
