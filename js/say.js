//Done by Nathan Page (200609542)
//May 26, 2025
//I could not find a good JavaScript validator

//I can select the first of type but need to specify that I'm getting the button only in the rest
const button1 = document.querySelector ("button:first-of-type");
const button2 = document.querySelector (".Button2 > button");
const button3 = document.querySelector (".Button3 > button");
const button4 = document.querySelector (".Button4 > button");
const button5 = document.querySelector (".Button5 > button");
const playButt = document.querySelector (".Randback > button:first-of-type");
const randomButt = document.querySelector(".Randback > button:nth-of-type(2)");
//Creating variables for the button to cycle, playback and randomize
const placeHolder = document.getElementById("placeholder");
//This tags our place holder on the page so we can place the story there!

let button1opt = ["The Turkey", "Mom", "Dad", "The Dog", "My Teacher", "The Elephant", "The Cat" ];
let button2opt = ["Sat On", "Ate", "Danced With", "Saw", "Doesn't Like", "Kissed" ];
let button3opt = ["A Funny", "A Scary", "A Goofy", "A Slimy", "A Barking", "A Fat"];
let button4opt = ["Goat", "Monkey", "Fish", "Cow", "Frog", "Bug", "Worm"];
let button5opt = ["On The Moon", "On The Chair", "In My Spaghetti", "In My Soup", "On The Grass", "In My Shoes"];
//We are simply just putting the options that the user can see into Arrays to use later

//I did not end up using the empty arrays

let iO = 0;
let iT = 0;
let iThr = 0;
let iF = 0;
let iFv = 0;
//We need to set different placeholder values for all five (done!)



//First BUTTON
function buttonOnes (){
    //Creating a function
iO++;
//Saying add to the function
if (iO >= button1opt.length){
    //If it becomes greater than the length it returns to zero
    iO = 0;
}

button1.textContent = button1opt[iO];
//Displays which one we are currently on in the array
}
button1.addEventListener("click", buttonOnes);
//Running the function when button 1 is clicked

//SECOND BUTTON
function buttonTwos (){
    //Same thing creating a function for button 2
iT++;
//Adding it everytime we hit the button
if (iT >= button2opt.length){
    //If it becomes greater than it returns to zero
    iT = 0;
}
button2.textContent = button2opt[iT];
//displays it in the button
}
button2.addEventListener("click", buttonTwos);
//Plays the function when the button is pressed.
  

//THIRD BUTTON
function buttonThrees (){
    //Same thing creating a function for button 3
iThr++;
//Adding it everytime we hit the button to cycle through
if (iThr >= button3opt.length){
    //If it becomes greater than or equal it returns to zero
    iThr = 0;
}
button3.textContent = button3opt[iThr];
//displays it in the button
}
button3.addEventListener("click", buttonThrees);
//Plays the function when the button is pressed.

// FOURTH BUTTOn
function buttonFours (){
    //Same thing creating a function for button 4
iF++;
//Adding it everytime we hit the button to the count
if (iF >= button4opt.length){
    //If it becomes greater than it returns to zero
    iF = 0;
}
button4.textContent = button4opt[iF];
//displays it in the button
}
button4.addEventListener("click", buttonFours);
//Plays the function when the button is pressed.
  

function buttonFives (){
    //Same thing creating a function for button 5
iFv++;
//Adding it everytime we hit the button
if (iFv >= button5opt.length){
    //If it becomes greater than it returns to zero
    iFv = 0;
}
button5.textContent = button5opt[iFv];
//displays it in the button
}
button5.addEventListener("click", buttonFives);
//Plays the function when the button is pressed.

function playButton (){
    //Function for the playback button
    story = `${button1opt[iO]} ${button2opt[iT]} ${button3opt[iThr]} ${button4opt [iF]} ${button5opt[iFv]}`;
    //Gathering all the resualts in the current array
    placeHolder.textContent = story;
    //Ensuring the text gets displayed on the page
}
playButt.addEventListener("click", playButton);
//When it clicks it activates the function!

function randomButton (){
    //Creating a new function for the random button
    iO = Math.floor(Math.random () * button1opt.length);
    iT = Math.floor(Math.random () * button2opt.length);
    iThr = Math.floor(Math.random () * button3opt.length);
    iF = Math.floor(Math.random () * button4opt.length);
    iFv = Math.floor(Math.random () * button5opt.length);
    //Picks one number randomly from the array and than rounds to give us the answer on what should be displayed from that number
story = `${button1opt[iO]} ${button2opt[iT]} ${button3opt[iThr]} ${button4opt [iF]} ${button5opt[iFv]}`;
//Retriving the resaults from the current Array
placeHolder.textContent = story;
//Displaying the text on the page
}
randomButt.addEventListener("click", randomButton);
//Activating the function on click!
//We are done!