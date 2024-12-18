const inputOne = document.getElementById("inputOne"); 
const inputTwo = document.getElementById("inputTwo");
const output = document.getElementById("output");
const subOne = document.getElementById("subOne");
const subTwo = document.getElementById("subTwo");
const resetOne = document.getElementById("resetOne");
const resetTwo = document.getElementById("resetTwo");


function challengeOne() {

if (inputOne.value < 1 || inputOne.value > 18) {
    alert('Please enter a number between 1 and 18');
    return;
}

let sum = 1;
for ( let i = inputOne.value; i > 0; i--) 
    {sum *= i; }
    output.textContent = sum;}

function challengeTwo() {
if (inputTwo.value < 1) {
    alert('Please enter a positive number');
    return;
    }
for ( let i = 1; i <= inputTwo.value; ++i){
    if (i % 5 == 0 && i % 3 == 0) {
        console.log('SKIM is a great place to work!!');}
    else if (i % 3 == 0) {
        console.log('SKIM');}
    else if (i % 5 == 0) {
    console.log('is a great place to work!!');
    }
    else {console.log(i)}}}

function clearChallengeOne(){
    inputOne.value = "";
    output.textContent = 'See Answer Here !'

    }

function clearChallengeTwo(){
    inputTwo.value = "";
    console.clear();
    }

subOne.addEventListener("click",challengeOne);
subTwo.addEventListener("click",challengeTwo);
resetOne.addEventListener("click",clearChallengeOne);
resetTwo.addEventListener("click",clearChallengeTwo);