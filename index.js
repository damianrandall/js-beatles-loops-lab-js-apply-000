
  describe('johnLennonFacts', function(){
    it("returns an array of strings with exclamation points", function() {
      expect(johnLennonFacts([
        
      ])).toEqual(["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]);

      expect(johnLennonFacts([
        "foo",
        "bar",
      ])).toEqual(["foo!!!", "bar!!!"])
    });
  });

  describe('iLoveTheBeatles', function() {
    it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
      expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
    });

    it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
      expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);// create a function 

//theBeatlesPlay

function theBeatlesPlay (musicians, instrument) {
  console.log (musicians + ' plays ' + instrument) 
}
theBeatlesPlay('John Lennon', 'Guitar'); 
theBeatlesPlay('Paul McCartney', 'Bass Guitar');
theBeatlesPlay('George Harrison', 'Lead Guitar');
theBeatlesPlay('Ringo Starr', 'plays Drums');


//johnLennonFacts

function johnLennonFacts (fact) {
  console.log (fact + "!!!,");
}
 johnLennonFacts("He was the last Beatle to learn to drive");
 johnLennonFacts("He was never a vegetarian");
 johnLennonFacts("He was a choir boy and boy scout");
 johnLennonFacts("He hated the sound of his own voice");