let shootButton = document.querySelector("#teamone-shoot-button")
let resetButton = document.querySelector("#reset-button")
let shotstaken = document.querySelector("#teamone-numshots")
let shootButton2 = document.querySelector("#teamtwo-shoot-button")
let shotsTaken2 = document.querySelector("#teamtwo-numshots")
let numresets = document.querySelector("#num-resets")
let numGoals = document.querySelector("#teamone-numgoals")
let numGoals2 = document.querySelector("#teamtwo-numgoals")

//JS for the shoot button
shootButton.addEventListener("click", function() {
    let newCounterValue = Number(shotstaken.innerHTML) + 1;

    // Calculate the new value for our counter:
  shotstaken.innerHTML = newCounterValue;
  var d = Math.random();
if (d < 0.5) {
    console.log ("Javascript is ROCKET SCIENCE")
    let newGoalValue = Number(numGoals.innerHTML) + 1;
    numGoals.innerHTML = newGoalValue;
}

})

//JS for the shoot 2 button
shootButton2.addEventListener("click", function() {
    let newCounterValue = Number(shotsTaken2.innerHTML) + 1;

    shotsTaken2.innerHTML = newCounterValue;
   let d = Math.random();
if (d < 0.5)  {
    console.log ("Javascript is a RECKONED FORCE")
    let newGoalValue = Number(numGoals2.innerHTML) + 1;
    numGoals2.innerHTML = newGoalValue;
} 
})

//Add EventListener for Reset button
resetButton.addEventListener("click", function() {
    let newCounterValue = Number (numresets.innerHTML) + 1;

    numresets.innerHTML = newCounterValue;
    shotstaken.innerHTML = 0;
    shotsTaken2.innerHTML = 0;
    numGoals2.innerHTML = 0;
    numGoals.innerHTML = 0;



//Clicking the "RESET" button should reset all the shot and goal counters and add 1 to the number of resets.



})







