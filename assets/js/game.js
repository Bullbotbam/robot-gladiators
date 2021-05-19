<<<<<<< HEAD
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
<<<<<<< HEAD
var playerMoney = 10;

// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}

var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators, " + playerName + "!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
  
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight.  Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
        fight();
    }
    
}

fight();
=======
var playerAttack = 10;
var playerMoney = 10;
=======
>>>>>>> develop



// function to generatr a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}



// fight function (now with parameter for enemy's name)
var fight = function(enemy) {
  console.log(enemy);
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.bitcoin for skipping
        playerInfo.bitcoin = Math.max(0, playerInfo.bitcoin - 10);
        console.log("playerInfo.bitcoin", playerInfo.bitcoin);
        break;
      }
    }

    // generat random damge value based on the player's attack power
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.bitcoin = playerInfo.bitcoin + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // generate random damage to players's health by subtracting the amount set in the enemy's attack power
    var damage = randomNumber(enemy.attack -3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};
    // player's robot information
    var playerInfo = {
      name: window.prompt("What is your robot's name?"),
      health: 100,
      attack: 10,
      bitcoin: 10,
      reset: function (){
        this.health = 100;
        this.attack = 10;
        this.bitcoin = 10;
      },
      refillHealth: function() {
        if (this.bitcoin >=7) {
          window.alert ("Refilling player's health by 20 for 7 bitcoin.");          
          this.health += 20;
          this.bitcoin -= 7;
        }
        else {
          window.alert("You don't have enough bitcoin!");
        }
      },
      upgradeAttack: function() {
        if (this.bitcoin >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 bitcoin.");          
          this.attack += 6;
          this.bitcoin -= 7;
        }
        else {
          window.alert("You don't have enough bitcoin!");
        }
      }
    };
    // enemy robot's information
    var enemyInfo = [
      {
        name: "Roborto",
        attack: randomNumber(10, 14)
      },
      {
        name: "Any Android",
        attack: randomNumber(10, 14)
      },
      {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
      }
    ];
// fight each enemy-robot by looping over them and fighting them one at a time
var startGame = function() {
  // reset player stats
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemy.health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);

      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;

      // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);

      // if we're not at the last enemy in the array and still alive
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before the next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
        
      }
    }
    // if player isn't alive, stop the game
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
    //after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
    // play again
    // startGame();
};
  // function to end the entire game
  var endGame = function() {
    window.alert("The game has now ended.  Let's see how you did!");
  
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
      window.alert("Great job, you have survived the game! Your score is " + playerInfo.bitcoin + ".");
    }
    else {
      window.alert("You have lost your robot in battle.");
    }
    // ask player if they's like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
      // restart the game
      startGame();
    }
    else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
    // //after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    //  endGame();
     
  };
  var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
      "Wold you like to REFILL your health, UPGRADE your attack or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice."
      );
      // use seitch to carry  out action
      switch (shopOptionPrompt) {
          // refilling player's health
        case "REFILL": 
        case "refill":
          playerInfo.refillHealth();
          break;
          // upgrading player's attack
        case "UPGRADE": 
        case "upgrade":
          playerInfo.upgradeAttack();
          break;
            // leave game
        case "LEAVE": 
        case "leave":
          window.alert("Leaving the store.");
          
          // do nothing, so function will end
          break;
        default:
          window.alert("You did not pick a valid option. Try again.");
          // call shop() again to force player to pick a valid option
          shop();
          break;
      }

      
  };

//start the game when the page loads
startGame();
<<<<<<< HEAD
>>>>>>> develop
=======



>>>>>>> develop
