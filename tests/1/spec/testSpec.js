
// The 'module' under test
describe("Module #1", function() {

    var a;

    // A single test expectation
    it("contains spec with an expectation", function() {
        
        // An assertion
        expect(true).toBe(true);
    
    });
    
    // A second test
    it("should evaluate variables", function() {
        
        a = true;

        expect(a).toBe(true);
    });

    it("should evaluate objects", function() {
        
        var Dog = function(name, color) {
            this.name = name || 'spot';
            this.color = color || '#000'; 
            this.toString = function() {
                return [ this.name, this.color ].join(',')
            } 
        }

        // compare objects & array
        expect( {a:1} ).toEqual( {a:1} );
        expect( [1,2] ).toEqual( [1,2] );

        // or methods of custom objects
        expect( new Dog().toString() ).toEqual( 'spot,#000' )
    

    });

});
