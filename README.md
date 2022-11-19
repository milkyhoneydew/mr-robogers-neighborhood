# Mr. Roboger's Neighborhood

#### By Tanya Prado
*Photo by Jochen van Wylick on Unsplash


## Website returning robot jargon from a number input. 

## Technologies Used

* HTML
* CSS
* Javascript

## Description

Provides an input field for user's to put a number of their choosing. On submit, the website prints a sentence from 0 to the user's inputted number, substituting numbers which include a 1 with "beep", numbers which include a 2 with "boop", and numbers which include a 3 with "Won't you be my neighbor?".

## Setup/Installation Requirements

* Clone the repository onto your own machine.
* Locate the mr-robogers-neighborhood folder.
* Double-click on the index.html file to open the website in your browser.
* Type a number into the indicated input and click on the submit button to receive a response!

## Known Bugs

* None.

## License

MIT Copyright (c) 2022 Tanya Prado

Describe: returnArray()

Test: "It should return an array from 0 to inputted number."  
Code: returnArray(7);  
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7]  

Describe: neighbor()

Test: "It should return an array with any number containing a 1 replaced with "beep"."  
Code: neighbor(6);  
Expected Output: [0, "beep", 2, 3, 4, 5, 6]  

Test: "It should return an array with any number containing a 1 replaced with "beep" and 2 replaced with "boop". If both a 1 and 2, replace with "boop".  
Code: neighbor(13);  
Expected Output:[0, "beep", "boop", 3, 4, 5, 6, 7, 8, 9, "beep", "beep", "boop", "beep"]  

Test: "It should return an array with any number containing a 1 replaced with "beep", 2 replaced with "boop" and 3 replaced with "Won't you be my neighbor?". If both a 1 and 2, replace with "boop". If 3 is present, replace with "Won't you be my neighbor?".  
Code: neighbor(24);  
Expected Output: [0, "beep"...(21, 22) "Won't you be my neighbor?", "boop"]  