
// The 'module' under test
describe("Module #1", function() {

    var a;

    // A single test expectation
    it("contains spec with an expectation", function() {
        
        // An expectation
        expect(true).toBe(true);
    
    });
    
    // A second test
    it("evaluates variables", function() {
        
        a = 5;
        expect(a).toBeGreaterThan(2); // Lots of matchers - ref: http://pivotal.github.com/jasmine/jsdoc/symbols/jasmine.Matchers.html
    
    });

    it("evaluates arrays and objects", function() {
        
        var Dog = function(name, color) {
            
            this.name = name;
            this.color = color;

            this.toString = function() {
                return [ this.name, this.color ].join(',')
            } 
        }

        // Compare objects & array
        expect( {a:1} ).toEqual( {a:1} );
        expect( [1,2] ).toEqual( [1,2] );

        // We can't test complex objects, so instead use a toString method
        expect( new Dog('bingo', 'blue').toString() ).toEqual( 'bingo,blue' )

    });

});
