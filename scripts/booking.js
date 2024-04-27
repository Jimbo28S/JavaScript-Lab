/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let totalDays = 0;
let totalCost = 0;
let dailyRate = 0;

const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const full = document.getElementById("full");
const half = document.getElementById("half");
const clearButton = document.getElementById("clear-button");

monday.addEventListener("click", selectMonday);
tuesday.addEventListener("click", selectTuesday);
wednesday.addEventListener("click", selectWednesday);
thursday.addEventListener("click", selectThursday);
friday.addEventListener("click", selectFriday);
full.addEventListener("click", );
half.addEventListener("click", halfDay(dailyRate));
clearButton.addEventListener("click", clearDays);


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function selectMonday() {
    monday.classList.remove('unclicked');
    monday.classList.add('clicked');
}

function selectTuesday() {
    tuesday.classList.add('clicked');
}

function selectWednesday() {
    wednesday.classList.add('clicked');
}

function selectThursday() {
    thursday.classList.add('clicked');
}

function selectFriday() {
    friday.classList.add('clicked');
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    monday.className.add('unclicked');
    monday.className.remove('clicked');
    
    tuesday.classList.remove('clicked');
    wednesday.classList.remove('clicked');
    thursday.classList.remove('clicked');
    friday.classList.remove('clicked');
}

// I had this function working at one point and then it just decided to stop working. Nothing else I've tried has worked.
// It has been an hour and a half and I havent found an answer anywhere. At one point I copied the working code from the hideshow example in class to use in here. That also didn't work
// I literally have no idea why this won't work. I have tried like 20 different options and not a single one will work. 


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDay(rate) {
    rate = 20;
    half.classList.add('clicked');
    full.classList.remove('clicked');
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDay(rate) {
    rate = 35;
    full.classList.add('clicked');
    half.classList.remove('clicked');
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

