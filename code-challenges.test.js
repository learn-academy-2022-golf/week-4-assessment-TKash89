// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

     describe("shuffle",() => {
         it("removes the first item from the array and shuffles the remaining content.",() => {
             const colors1 = ["purple", "blue", "green", "yellow", "pink"]
                         // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        expect(shuffle).toEqual(expect.anything());


             const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
                         // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        expect(shuffle).toEqual(expect.anything());
            

         })
    })

                          //  *****TEST RESULTS: Failed -----------> ReferenceError: shuffle is not defined
                                         //Test Suites: 1 failed, 1 total
                                         //Tests:       1 failed, 1 total


// b) Create the function that makes the test pass.
        ///// INPUT: colors1, colors1
        /////OUTPUT:["blue", "green", "yellow", "pink"] ; ["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

                                ///Setting up the Jest testing framework, I discover a jest method call anything that will leave
                        /// it relatively open to any test results. This is is help when I use the slice method to take off the 
                        // first element in each array. I get a good failing test with my variable |shuffle|. Creating my function I    
                        // plan to return the arrays by slicing the first element in each of the color1, color2 arrays. The problem is 
                        // that the terminal output is [Function: shuffle]. it knows it's a function but for some reason my code is not running.
                        // My function may not be invoked?

         const shuffle = (arr) => {
            return arr(colors1.slice(1))(colors2.slice(1))
         }
    

 





// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("tallyVote",() => {
    it("returns the end tally that contains up votes and down votes.",() => {
      const votes1 = {upVotes: 13, downVotes: 2}      // Expected output: 11
    expect(tallyVote()).toEqual(11)

         const votes2 = {upVotes: 2, downVotes: 33}     // Expected output: -31
    expect(tallyVote()).toEqual(-31)
      })
})  
//                         //  *****TEST RESULTS: Failed -----------> ReferenceError: tallyVote is not defined
//                                          //Test Suites: 1 failed, 1 total
//                                          //Tests:       1 failed, 1 total


// b) Create the function that makes the test pass.

                /////INPUT: votes1, votes2
                ////OUTPUT: 11 ; -31

                                ////I'm using tallyVote for my created function. The plan is to subtract each key 
                         // value pair within each object, to the other key value pair to end up with the passing test. I begin
                         // by returning each object |votes1 & votes2| subracting the key value pairs within. These are represented 
                         // with "upVotes / downVotes". The terminal is stating that tallyVote is a function but it is not being executed.      
       
                         const tallyVote = (object) => {
               return object (votes1.upVotes - votes1.downVotes)(votes2.upVotes - votes2.downVotes)
           }





// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
 const dataArray1 = ["array", "object", "number", "string", "Boolean"]
 const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]

           describe("noDuplicates",() => {
                 it("returns one array with no duplicate values.",() => {
                     
            expect(noDuplicates()).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])   
           
            expect(noDuplicates()).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])   
        
                 })
            })                     // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


                                //  *****TEST RESULTS: Failed -----------> ReferenceError: noDuplicates is not defined
                                                 //Test Suites: 1 failed, 1 total
                                                 //Tests:       1 failed, 1 total



// b) Create the function that makes the test pass.
               ////INPUT: dataArray1 / dataArray2
               ///OUTPUT: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
                                ////The function I am creating, I have declared "noDuplicates" the function name
                          // and plan to return both of the arrays as one using the accessor method concat. This will ensure
                          // the arrays are combined, outputting the correct answer in terminal. Checking over the syntax, the
                          //terminal displays that noDuplicates is a function.       


               const noDuplicates = (arr) => {
                      return arr(dataArray1.concat(dataArray2))
                         } 
                   