curl('foo').then( function  (module) { 

        describe("Module #4", function() {

            // Question - What do we do with async code?
            it("should make an XHR request", function() {
                
                var a = false;
                
                module.$.get('fixtures/1', {}, function() { 
                    var a = true;
                });

                expect(a).toBeTruthy(); // Async test will fail! Can you tell me why?

            });
            
            // Answer #1 - Wait for it
            it("should load an AMD module and evaluate the response", function() {
                
                var a = false;
               
                // Nb. typically this code would be in your module
                module.$.get('fixtures/1', function () {
                    a = true;  // We set 'a' to true in the callback of the xmlhttp request
                });

                waitsFor(function() {
                    return (a == true); // this gets executed repeatedly for 1000ms until 'a' is true
                }, "a was never true", 1000)

                runs(function() {
                    expect(a).toBeTruthy();
                });

            });
            
            // Answer #2 - Spy on it
            it("should mock the XHR request", function() {

                spyOn(module.$, "get").andCallFake(function(url, success) { // Essentially linearise the execution chain of the functions
                    success();
                    });
                
                var a = false;
               
                module.$.get('fixtures/2', function () {
                    a = true; 
                });
                
                expect(a).toBeTruthy();

                expect(module.$.get).toHaveBeenCalled();
                
                expect(module.$.get.mostRecentCall.args[0]).toEqual("fixtures/2");

            });

            // Answer #3 - Fake it (Sinon overwrites the window.XMLHttpRequest object)
            it("should fake the XHR request", function() {

                var xhr = sinon.useFakeXMLHttpRequest()
                  , server = sinon.fakeServer.create();
                
                server.respondWith("GET", "fixtures/3", [200, {}, 'some server data']); // Nb. think about how you can use this to test HTTP 404s, 500 etc.
                
                var a = false;

                module.$.get('fixtures/3', function () {
                    a = true; 
                });
                 
                server.respond();  // tell the fake server to respond to any requests it's received
                
                expect(a).toBeTruthy();

                xhr.restore();
                
            });

        })
    },
    function(e) {
        console.log('Something has gone wrong here with the curl.js loading', e);
    }
);
