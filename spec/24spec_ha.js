describe("small talk with Bob", function () {
    it("receive'Of cource', if question", function () {
        const result = tellToBob("Как дела?");

        expect(result).to.equal("Конечно");
    });
    it("receive'Wow, relax', if cry", function () {
        const result = tellToBob("ПРИВЕТ");

        expect(result).to.equal("Вау, расслабься!");
    });
})
