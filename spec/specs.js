describe("triangleType", function() {
  it("returns false if one side is greater than the other two combined", function() {
    expect(triangleType(2,3,6)).to.equal(false);
  });

  it("is equilateral if all three sides are equal", function() {
    expect(triangleType(5,5,5)).to.equal("equilateral");
  });

  it("is an isosceles triangle if exactly 2 sides are equal", function() {
    expect(triangleType(6,6,4)).to.equal("isosceles");
  });

  it("is a scalene triangle if all sides aren't equal", function() {
    expect(triangleType(5,4,6)).to.equal("scalene");
  });
});
