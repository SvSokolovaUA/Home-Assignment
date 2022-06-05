describe("matrix", function () {
    it("receive string, return array with arrays", function () {
        const result = matrix("1 2 3\n4 5.5 6");

        expect(result).to.equal([[1, 2, 3], [4, 5.5, 6]]);
    });

})
