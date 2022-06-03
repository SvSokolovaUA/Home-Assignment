describe("FizzBuzz", function () {
    it("if a number is a multiple of '3' returns 'Fizz'", function () {
        const result = getFizzBuzz(6);

        expect(result).to.equal("Fizz");

    });
    it("if a number is a multiple of '5' returns 'Buzz'", function () {
        const result = getFizzBuzz(20);

        expect(result).to.equal("Buzz");

    });
    
    it("if a number is a multiple of both '3' and '5' returns 'FizzBuzz'", function () {
        const result = getFizzBuzz(30);

        expect(result).to.equal("FizzBuzz");

    });
     it("if a number is not divisible by '3' or '5' returns 'itself'", function () {
        const result = getFizzBuzz(16);

        expect(result).to.equal("16");

         
     });
});

