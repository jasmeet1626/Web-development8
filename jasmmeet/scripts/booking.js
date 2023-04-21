/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const weekdays = document.querySelectorAll("#weekday");
let dayCounter = 0;

weekdays.forEach(function(day) {
day.addEventListener("click", function clickedDay() {
if (!day.classList.contains("clicked")) {
dayCounter += 1;
day.classList.add("clicked");
calculateWeeklyCost();
}
});
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const clearButton = document.getElementById("clear-button");
const weeklyCost = document.getElementById("calculated-cost");

clearButton.addEventListener("click", clearDays);

function clearDays() {
weekdays.forEach(function(day) {
day.classList.remove("clicked");
});
dayCounter = 0;
weeklyCost.innerHTML = 0;
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const halfButton = document.getElementById("half");
let dailyRate = 35;

halfButton.addEventListener("click", function half() {
dailyRate = 20;
halfButton.classList.add("clicked");
fullButton.classList.remove("clicked");
calculateWeeklyCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

const fullButton = document.getElementById("full");

fullButton.addEventListener("click", function full() {
dailyRate = 35;
fullButton.classList.add("clicked");
halfButton.classList.remove("clicked");
calculateWeeklyCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateWeeklyCost() {
const cost = dailyRate * dayCounter;
weeklyCost.innerHTML = cost;
}