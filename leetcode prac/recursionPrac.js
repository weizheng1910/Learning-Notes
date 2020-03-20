// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(array){
    // This function returns the largest number in a given array.
    var firstElementInArray = array[0];
    function helper(max,array,i){
      if(i > array.length) {
        return max;
      }
      
      if (array[i] > max) {
        return helper(array[i],array,i+1);
      } else {
        return helper(max,array,i+1);
      }
    }
  return helper(firstElementInArray,array,0);
}

function factorial(n){
    if(n == 1){
       return 1;
     } else {
       return n * factorial(n-1);
     }
 }

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
    if(n == 1 || n == 2){
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

function coinFlips(n){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
    
    function helper(j,prevArray){
      // Base case
      if(j > n){
        return prevArray;
      }
    
      if (j == 1){
        let array = [];
        array.push("H");
        array.push("T");
        return helper(j+1,array);
      } else {
        var newArray = [];
        for(let i = 0; i<prevArray.length; i++){
        var currElement = prevArray[i];
        newArray.push(currElement.concat("H"));
        newArray.push(currElement.concat("T"));
        }
        return helper(j+1,newArray);
      }
    }
      
      return helper(1,[])
    }


function letterCombinations(inputArray){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
  var resultArray = [];
  function helper(curr,hold){
    
    resultArray.push(curr);
    if(hold.length == 0){
      return
    }
    for(let i = 0; i < hold.length; i++){
      helper(curr+hold[i],hold.slice(0,i)+hold.slice(i+1))
    }

  }
  
  helper("",inputArray);
  return resultArray;
  
}
// Test Script below, DO NOT TOUCH 

mocha.setup('bdd');
const expect = chai.expect;

describe('findMax', ()=>{
    it('should find the largest number in an array', ()=>{
        let testArray = [3,4,2,1,2];
        expect(findMax(testArray)).to.equal(4);
    });
    it('should work for negative numbers', ()=>{
        let testNegatives = [-1, -4, -2];
        expect(findMax(testNegatives)).to.equal(-1);
    });
})

describe('factorial', ()=>{
    it('should accurately calculate factorials', ()=>{
        expect(factorial(3)).to.equal(6);
        expect(factorial(5)).to.equal(120);
    });
})

describe('fibonacci', ()=>{
    it('should accurately return base cases', ()=>{
        expect(fibonacci(1)).to.equal(1);
        expect(fibonacci(2)).to.equal(1);
    });
    it('should accurately calculate subsequent numbers', ()=>{
        expect(fibonacci(3)).to.equal(2);
        expect(fibonacci(4)).to.equal(3);
        for(let i = 3; i < 10; i++){
            expect(fibonacci(i)).to.equal(fibonacci(i-1)+fibonacci(i-2));
        }
    });
})

describe('coinFlips', ()=>{
    it('should return an array', ()=>{
        expect(Array.isArray(coinFlips(2))).to.equal(true);
    });
    it("should include all possibilities", ()=>{
        let results = coinFlips(4);
        expect(results.includes("HHHH")).to.equal(true);
        expect(results.includes("HTHT")).to.equal(true);
        expect(results.includes("TTTT")).to.equal(true);
        expect(results.length).to.equal(16);
    });
})

describe('letterCombinations', ()=>{
    it("should return an array", ()=>{
        expect(Array.isArray(letterCombinations(["a","b","c"]))).to.equal(true);
    });
    it("should include single letter results", ()=>{
        expect(letterCombinations(["a","b","c"]).includes("b")).to.equal(true);
    });
    it("should include combinations in different order", ()=>{
        expect(letterCombinations(["a","b","c"]).includes("ba")).to.equal(true);
        expect(letterCombinations(["a","b","c"]).includes("ab")).to.equal(true);
    });
    it("should include full-length combinations", ()=>{
        expect(letterCombinations(["a","b","c"]).includes("bac")).to.equal(true);
        expect(letterCombinations(["a","b","c"]).includes("cab")).to.equal(true);
    });
})

mocha.run()