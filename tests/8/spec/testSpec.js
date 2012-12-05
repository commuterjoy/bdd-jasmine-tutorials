
curl(['foo', 'common']).then( function  (foo, common) { // Load a shared AMD module between 
                                                        // the test and the production code
                                                        // called 'common'

        describe("Module #8", function() {

            it("should load an AMD module", function() {
                expect(common.mediator).toBeDefined(); 
            });

            it("modules:foo:render be called", function() {
                
                // Spy on the mediator
                spyOn(common.mediator, 'emitEvent').andCallThrough();
                var f = new foo();

                // Fire the external event
                common.mediator.emitEvent('something') 
               
                // Wait ... 
                waitsFor(function(){
                    return (common.mediator.emitEvent.callCount == 2);
                }, "event emitter was never called", 2000)

                runs(function() {
                    expect(common.mediator.emitEvent.calls.length).toBe(2);
                    expect(common.mediator.emitEvent.mostRecentCall.args[0]).toEqual('modules:foo:render');
                });

            });

        })
    },
    function(e) {
        console.log('Something has gone wrong here with the curl.js loading', e);
    }
);
