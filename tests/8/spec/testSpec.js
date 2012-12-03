
curl(['foo', 'common']).then( function  (bar, common) { // Load a shared AMD module between 
                                                        //          the test and the production code called 'common') 

        describe("Module #8", function() {

            it("should load an AMD module", function() {
                expect(common.mediator).toBeDefined(); // And test it has been loaded
            });

        })
    },
    function(e) {
        console.log('Something has gone wrong here with the curl.js loading', e);
    }
);
