describe('Math function test', function () {

    it('function add should return the sum of a,b', function () {

        var sum = add(3, 4);
        expect(sum).toBe(7);
    });

    it('function add should return the sum of a,b', function () {

        var sum = mul(3, 4);
        expect(sum).toBe(12);
    });

});