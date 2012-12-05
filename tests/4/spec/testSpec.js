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

                // this gets executed repeatedly for 1000ms until 'a' is true
                waitsFor(function() {
                    return (a == true); 
                }, "a was never true", 1000)

                runs(function() {
                    expect(a).toBeTruthy();
                });

            });
            
            // Answer #2 - Stub it with a test spy
            it("should mock the XHR request", function() {
                
                // Nb. Essentially linearise the execution chain of the functions
                spyOn(module.$, "get").andCallFake(function(url, success) { 
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

            // Answer #3 - Mock it (Sinon overwrites the window.XMLHttpRequest object)
            it("should fake the XHR request", function() {

                var xhr = sinon.useFakeXMLHttpRequest()
                  , server = sinon.fakeServer.create();
                
                // Nb. think about how you can use this to test HTTP 404s, 500 etc.
                server.respondWith("GET", "fixtures/3", [200, {}, 'some server data']); 
                
                var a = false;

                module.$.get('fixtures/3', function () {
                    a = true; 
                });
                 
                // Tell the fake server to respond to any requests it's received
                server.respond();                 
                
                expect(a).toBeTruthy();

                // Restore native XmlHtttRequest object
                xhr.restore();
                
            });

        })
    },
    function(e) {
        console.log('Something has gone wrong here with the curl.js loading', e);
    }
);
