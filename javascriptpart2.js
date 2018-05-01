
    let user = 40;
    let grant = 10;
    let win = 0;
    let done = false;


function startGame () {
    var firstResponse = prompt("Do you want to play a game?");
if (firstResponse === "yes") {
    var userName = prompt("Please enter your name.");
    alert("You are about to enter a combat with the Almighty Grant. If you defeat him three times, you will be named Champion!")
    startCombat(userName);
} else if (firstResponse === "no") {
    alert("Maybe next time. Have a good day! :)");
} else {
    alert("Please enter 'yes' or 'no'.");
}
}

const getDamage = function () {
    return Math.floor(Math.random() * 5) + 1;
}

function startCombat (userName) {
    while (done === false) {
        var attack = prompt("Would you like to attack (a) or quit (q)?");
        let grantDamage = getDamage();
        let userDamage = getDamage();
        if (attack === "a") {
            user -= userDamage;
            grant -= grantDamage;
            console.log(`${userName} takes ${userDamage} damage.`); 
            console.log(`${userName} has ${user} health points left.`);
            console.log(`Almighty Grant takes ${grantDamage} damage.`);
            console.log(`Almighty Grant has ${grant} health points left.`);
        } else {
            alert("Thanks for playing! Have a nice day! :)");
            break;
        }
        if (win === 2 && grant <=0) {
            console.log(`${userName} is the champion!`);
            done = true;
        } else if (grant <= 0) {
            grant = 10;
            win ++;
            console.log(`You have won round ${win}!`);
            console.log(`However Grant uses his dark powers to come back again!`);
        } else if (user <= 0) {
            console.log("The Almighty Grant has won!");
            done = true;
        } else {
            continue;
        }
    }
}

startGame();