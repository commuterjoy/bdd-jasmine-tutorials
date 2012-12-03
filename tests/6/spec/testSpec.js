
curl(['ago']).then( function  (ago) { // Load the AMD module called 'foo' and assign to variable 'bar' 

        describe("Module #6", function() {

            var fakeNow = Date.parse('2012-08-13T12:00:00+01:00');
                sinon.useFakeTimers(fakeNow, "Date"); // sets all 'new Date()' calls to the fakeNow date

            it("should represent under 60 seconds in words", function() {
                var epoch = Date.parse('2012-08-13T11:59:50+01:00')
                expect(ago.toString(epoch)).toEqual('Less than a minute ago');
            });

        })
    },
    function(e) {
        console.log('Something has gone wrong here with the curl.js loading', e);
    }
);
