
describe("Module #2", function() {

    var arr;

    // Note how arr gets reset to empty after each test
    beforeEach(function() {
        arr = [];     
    });

    //  
    afterEach(function() {
    });

    it("should append an item to the list", function() {
        arr.push("test")    
        expect(arr.length).toBe(1);
    });
    
    it("should remove an item from the list", function() {
        arr.push("test")
        arr.pop("foo")
        expect(arr.length).toBe(0);
    });

    // Nb. Tests can be disabled with 'xit'
    xit("should remove all items from the list", function() {
        arr.push("test")
        arr.empty()
        expect(arr.length).toBe(0);
    })

});
