const findSum = function(array) {
  // your code here - don't forget to return a number!
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
};

const largestPair = function(array) {
  
  var numbers =  [7,8,2,5];

var everyProduct = [];


 for(var i = 0; i < 3; i++){
   
    var currentNum = numbers[i];
   
    var nextNum = numbers[i + 1];
         
    var product = currentNum * nextNum;
   
   everyProduct.push(product);
   everyProduct.sort()
       
 }

 function largestPair(everyProduct) {
  
      return everyProduct[2];
 }
   
 largestPair(everyProduct[[2]]);
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
