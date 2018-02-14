# Small-Quiz-Game
Small-Quiz-Game

This small quiz game can be played on console of a browser. 
The purpose of creation of this game is just to try ES5 features such as Closures, Protorype, IIFE, Constructor, Recursion and Callbacks.

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

8. After displaying the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result) 
