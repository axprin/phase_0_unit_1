// I paired with: Celeen Rusk on this challenge.




// Pseudocode
// call the variable secretNumber
// set variable secretNumber equal to a number
// set variable secretNumber equal to 7
// call the variable password
//set variable password equal to a string
//set value of password equal to 'just open the door'
//call boolean allowedIn
//set value of boolean allowedIn to a boolean
//set value of boolean allowed In equal to false
//call variable members
//set value to an array
//set first element in array members equal to 'John'
//set the fourth elemeent of array members equal to 'Mary'
//


// __________________________________________
// Write your code below.
var secretNumber = 7;
var password = "just open the door"
var allowedIn = false
var members = ["John", 28, 1, "Mary"]






// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// After looking at my code again, I don't think it can be refactored at all. As I was going through the tests, I think I inadvertantly refactored on the go, which is probably not a good method, but I did it. I will do my best to stray away from this practice in the future.



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// I thought this exercise was really fun and engaging. See the power of JavaScript and what it can do (even at this very beginning level) is awesome. I'm really looking forward to learning more of this powerful language. As I stated above, I think I might have employed a bad practice, by refactoring my code as I was going through making sure my code would pass each test. In the future, I feel like I should avoid this and just write code in one step and refactor in another. I'm still not sure how I feel the idea of pseudocode really helps, but I'm sure it's just the beginning and when our prompts/assignments get harder, it will be much clearer why this step is needed. 
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

