# Small-Quiz-Game and Town Administration Challenge
Small-Quiz-Game

This small quiz game can be played on console of a browser as well as the Town Administration Challenge. 
The purpose of creation of this game and challenge is just to try ES5 and ES6 features such as Closures, Protorype, IIFE, Constructor, Recursion and Callbacks, Classes, Arrow functions and Default parameters.

How the game was built:

Inital commit is built to serve the following 7 points:

1. Building a function constructor called Question to describe a question. 
   A question should include: 
   a) question itself 
   b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
   c) correct answer (I would use a number for this) 

2. Creating a couple of questions using the constructor 

3. Storing them all inside an array 

4. Selecting one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task). 

5. Using the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4. 

6. Checking if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this). 

7. If this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that). 

And Second commit is built to serve the rest of the points:

8. After displaying the result, display the next random question, so that the game never ends (Writing a function for this and call it right after displaying the result) 

#Town Administration Challenge

Suppose that I'm working in a small town administration, and I'm in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 3 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, my boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

Using some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
