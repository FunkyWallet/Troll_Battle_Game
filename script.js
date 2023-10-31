// Battle Game Project 10/27/2023
// h2 for victory &#127881 You are victorious! &#127881
// h2 for defeat &#128128 You have suffered defeat! &#128128

// Add an event handler to the button element
document.getElementById("button").onclick = startBattle;

// Definition of the startBattle() function which starts the game itself
function startBattle() {
    // clear any old messages in the document from previous games
    document.getElementById("victory").textContent = "";
    document.getElementById("defeat").textContent = "";
    // Initial prompt for user input that gets stored in a variable (action)
    let action = window.prompt("The forest calls to you. You heed the call and are greeted by a War Troll.\n\nWill you FIGHT this beast?\n\nWill you try to BRIBE the troll?\n\nWill you RUN like a coward?").toUpperCase();

    // Switch statement to handle the player's choice
    switch (action) {
        case "FIGHT": {
            fightBattle();
            break;
        } //end of case FIGHT

        case "BRIBE": {
            bribeBattle();
            break;
        } // end of case BRIBE

        case "RUN": {
            runBattle();
            break;
        } // end of case RUN
        default: {
            // When the user enters an invalid choice
            window.alert("Do not stray - " + action + " - is not an option available to you.");
            startBattle();
            break;
        } // end of default case
    } // end of switch statement
} // end of startBattle()

// definititon of the fightBattle() function
function fightBattle() {
    // start collecting some user responses w/ variables
    let skill = window.prompt("Have you any skill in the ways of combat? (YES or NO)").toUpperCase();
    let strong = window.prompt("Do you believe your strength can best a troll? (Yes or NO)").toUpperCase();
    // Logic that analyzes the responses and creates the outcome
    if (skill === "YES" || strong === "YES") {
        // the user said YES to at least one prompt
        document.getElementById("victory").innerHTML = "&#127881 You have bested the War Troll!<br>You may proceed into the forest and heed the mysterious call. &#127881"
        document.getElementById("win").play();
        document.getElementById("button").textContent = "Press Onward!"
    } else {
        document.getElementById("defeat").innerHTML = "&#128128 You are left bloodied and beaten.<br>The call of the forest grows faint.<br>You are not worthy. &#128128"
        document.getElementById("lose").play();
        document.getElementById("button").textContent = "Senzu Bean?"
    }// end of if statement
}// end of fightBattle()

// definition of the runBattle() function
function runBattle() {
    // Variable to store the user response
    let fast = window.prompt("Is speed on your side? (YES or NO)").toUpperCase();
    
    // Logic to analyze variable and provide the outcome
    if (fast === "YES") {
        document.getElementById("victory").innerHTML = "Speed has aided your cowardice.<br>You may proceed, though you are less worthy."
        document.getElementById("win").play();
        document.getElementById("button").textContent = "Go Forth."
    } else {
        document.getElementById("defeat").innerHTML = "&#128128 You are left bloodied and beaten.<br>The call of the forest grows faint.<br>You are not worthy. &#128128"
        document.getElementById("lose").play();
        document.getElementById("button").textContent = "Senzu Bean?"
    } // end of if statement
} // end of runBattle()

// Definition of bribeBattle() function
function bribeBattle() {
    // Variable to store the user response
    let money = window.prompt("Have you any coin? (YES or NO)").toUpperCase();
    // analyze variable and provide outcome
    if (money === "YES") {
        // User has coin, ask how much
        let amount = window.prompt("How much?\nProvide a NUMERIC VALUE.")
        // check the amount against our condition (this is where to place [later] the random value for troll acceptance.)
        if (amount > 150) {
            document.getElementById("victory").innerHTML = "Your offer pleases the War Troll. It lets you pass."
            document.getElementById("win").play();
            document.getElementById("button").textContent = "Proceed."
        } else {
            // User does not have enough coin
            document.getElementById("defeat").innerHTML = "&#128128 You are left bloodied and beaten.<br>The call of the forest grows faint.<br>You are not worthy. &#128128"
            document.getElementById("lose").play();
            document.getElementById("button").textContent = "Senzu Bean?"
        }
    } else {
        // User does not have coin
        document.getElementById("defeat").innerHTML = "&#128128 A bribe without coin? You are Bold. The troll does not accept your non-offer and skewers you. &#128128"
        document.getElementById("lose").play();
        document.getElementById("button").textContent = "Senzu Bean?"
    }// end of if statement
}// end of bribeBattle()























































































