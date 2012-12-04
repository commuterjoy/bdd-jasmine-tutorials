curl(['foo', 'jquery']).then( function  (bar, $) {

        describe("Module #5", function() {

            it("should replace the headline of the page", function() {
                
                // read a fixture from the test runner DOM
                var headline = document.getElementById('headline');

                // execute the module code to replace the headline
                bar.replace(headline);

                // assert against the DOM
                expect(headline.innerText).toEqual('New Headline');
            
            });
            
            it("should replace the headline of the page when clicked", function() {
                
                var button = document.getElementById('button') 
                  , headline = document.getElementById('headline');

                bar.headlineChange(button, headline);

                // simulate user interaction with the DOM (via JQuery)
                $('#button').trigger('click');

                expect(headline.innerText).toEqual('New Headline (clicked)');
            
            });

        })
    },
    function(e) {
        console.log('Something has gone wrong here with the curl.js loading', e);
    }
);
