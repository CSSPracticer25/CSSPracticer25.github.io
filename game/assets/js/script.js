let playerHealth = 100;
let playerGold = 0;
let playerXP = 0;
let playerInventory = []; 

function goTo(location) {
    let output = document.getElementById("output");
    output.innerHTML = "";

    switch (location) {
        case "town":
            output.innerHTML = "<p>You are in the town of Honey Wood. What would you like to do next?</p>";
            updateStats();
            clearInventory();
            break;
        case "cave":
        case "dungeon":
            explore(location);
            break;
        case "shop":
            visitShop();
            break;
        case "sell":
            sellItems();
            break;
        default:
            output.innerHTML = "<p>That's not possible right now..</p>";
            break;
    }
}

function explore(location) {
    let output = document.getElementById("output");
    let locationName = location === "cave" ? "mysterious cave" : "dark and ominous dungeon";
    output.innerHTML = "<p>You explore the " + locationName + "...</p>";
    encounterMonster(location === "cave" ? "Bat" : "Skeleton");
    updateStats();
    addItemToInventory();
}

function encounterMonster() {
    if (playerHealth <= 0) {
        window.alert("You can't encounter a monster because your health is too low!");
        return;
    }

    let monsters = ['Skeletons', 'Ghouls', 'Bat', 'Slime', 'Imp'];
    let randomIndex = Math.floor(Math.random() * monsters.length);
    let monster = monsters[randomIndex];

    let output = document.getElementById("output");
    output.innerHTML = "<p>You encountered a motherfucking " + monster + "!</p>";

    let monsterHealth = 80 + Math.floor(playerXP / 100) * 20; 
    let basePlayerDamage = Math.floor(Math.random() * 20) + 15 + Math.floor(playerXP / 50) * 2;
    let monsterDamage = Math.floor(Math.random() * 20) + 5 + Math.floor(playerXP / 50) * 2;
    let playerDamage = basePlayerDamage + Math.floor(playerXP / 100) * 15;
    

    while (playerHealth > 0 && monsterHealth > 0) {
        monsterHealth -= playerDamage;
        output.innerHTML += "<p>You attack the " + monster + " for " + playerDamage + " damage.</p>";

        if (monsterHealth <= 0) {
            let goldDropped = Math.floor(Math.random() * 50) + 10;
            let xpDropped = Math.floor(Math.random() * 50) + 40 + Math.floor(playerXP / 50) * 2;
            let hpHealth = Math.floor(Math.random() * 15) + 10 + Math.floor(playerXP / 50) * 1;
            output.innerHTML += "<p>The " + monster + " dropped " + goldDropped + " gold!</p>";
            output.innerHTML += "<p>The " + monster + " give " + xpDropped + " XP!</p>";
            output2.innerHTML += "<p>Your damage increased by " + basePlayerDamage + " !</p>";
            output2.innerHTML += "<p>Your Health increased by " + hpHealth + " !</p>";
            playerGold += goldDropped;
            playerXP += xpDropped;
            playerHealth += hpHealth;
            updateStats();
            output.innerHTML += "<p>You defeated the " + monster + "!</p>";
            break;
        }

        playerHealth -= monsterDamage;
        output.innerHTML += "<p>The " + monster + " attacks you for " + monsterDamage + " damage. You are bleeding</p>";
        updateHealthText();

        if (playerHealth <= 0) {
            window.alert("You got defeated, you stupid excuse for a human being!");
            resetAll();
            updateStats();
            break;
        }
    }
}

function resetAll() {
    playerHealth = 100;
    playerGold = 0;
    playerXP = 0;
    playerInventory = [];
    updateStats();
    clearOutput();
    
}

function clearOutput() {
    let output = document.getElementById("output");
    output.innerHTML = "You wake up in the dungeons entrance.. do you want to explore again?";
    document.getElementById("output2").innerHTML = "all items has been lost";
}



function visitShop() {
    let output = document.getElementById("output");
    output.innerHTML = "<p>Welcome to the shop. What would you like to buy?</p>";
    // Item list and buyItem function here
}

function sellItems() {
    let totalGold = 0;
    // Calculation for selling items
    playerInventory = [];
    playerGold += totalGold;
    document.getElementById("output2").innerHTML = "Item Sold";
    updateStats();
}

function addItemToInventory() {
    let items = ['Monster Potion', 'Scraps', 'Strange Scrolls'];
    let randomItem = items[Math.floor(Math.random() * items.length)];
    playerInventory.push(randomItem);
    let output2 = document.getElementById("output2");
    output2.innerHTML += "<p>You found " + randomItem + "! and its not useable, maybe you can sell in the Town</p>";
}

// function resetHealthWithXPBonus() {
//     const baseHealth = 100;
//     const playerXP = 10;
//     const xpThreshold = 100;

//     let playerHealth = baseHealth + Math.floor(playerXP / xpThreshold) * playerXP;
//     playerHealth = totalHealth > baseHealth ? totalHealth : baseHealth;

//     updateHealthText();

// }

function updateHealthText() {
    document.getElementById("healthText").textContent = playerHealth;
    
}

function updateStats() {
    
    updateHealthText();
    document.getElementById("goldText").textContent = playerGold;
    document.getElementById("xpText").textContent = playerXP;
    document.getElementById("healthText").textContent = playerHealth;

    if (playerXP >= 100) {
        playerHealth += 10;
        playerXP += 100;
        updateHealthText();
    }
}

function clearInventory() {
    document.getElementById("output2").innerHTML = "Items Sold, and your health is now replenished!";
}

updateStats();

