describe("triangleType", function() {
  it("returns false if one side is greater than the other two combined", function() {
    expect(triangleType(2,3,6)).to.equal(false);
  });

  it("is equilateral if all three sides are equal", function() {
    expect(triangleType(5,5,5)).to.equal("equilateral");
  });
});
