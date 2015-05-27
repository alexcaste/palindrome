describe('palindromeFind', function() {
  it("will return true if the word is a plaindrime", function(){
    expect(palindromeFind("bob")).to.equal(true);
  });
});

describe("sentences", function() {
  it("will return true a sentence is a palindrome", function() {
    expect(palindromeFind("woot toow")).to.equal(true);
  });
});
