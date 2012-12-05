curl(['headline', 'jquery']).then( function  (headline, $) {

        describe("Module #5", function() {

            var el;

            beforeEach(function() {
                
                // Read a fixture from the DOM
                el = document.getElementById('headline');
                el.innerText = 'Headline';
            
            })

            it("should replace the headline of the page", function() {
                
                // Execute the module code the replace the headline
                headline.replace(el);

                // Assert against the DOM
                expect(el.innerText).toEqual('Headline | guardian.co.uk');
            
            });
            
            it("should replace the headline of the page when clicked", function() {
                
                var button = document.getElementById('button'); 

                headline.bindReplaceToEvent(button, el);

                // Simulate user interaction with the DOM (via JQuery)
                $('#button').trigger('click');

                expect(el.innerText).toEqual('Headline | guardian.co.uk - clicked');
            
            });

        })
    },
    function(e) {
        console.log('Something has gone wrong here with the curl.js loading', e);
    }
);
