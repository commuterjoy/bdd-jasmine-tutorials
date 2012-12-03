
describe("Module #7", function() {
    
    beforeEach(function() {
               
        this.addMatchers({
            startsWith: function(expected) {
                return this.actual.indexOf(expected) === 0;
                }
        });
    });

    it("should append an item to the list", function() {
        var headline = 'Exploded cardinal preaches sermon from fish tank.'
        expect(headline).startsWith('Exploded');
    });

});
