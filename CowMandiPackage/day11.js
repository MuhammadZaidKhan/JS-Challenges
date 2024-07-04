#!/usr/bin/env node
import inquirer from "inquirer";

async function askQuestion() {
  let continueShopping = true;

  while (continueShopping) {
    const { animal } = await inquirer.prompt([
      {
        type: "list",
        name: "animal",
        message: "Welcome to Mandi\nWould you like to buy a cow or goat?",
        choices: [
          { name: "Cow", value: "Cow Rate: 150k\nColor: Black" },
          { name: "Goat", value: "Goat Rate: 50k\nColor: White" },
          new inquirer.Separator(),
          { name: "Exit", value: "exit" },
        ],
      },
    ]);

    if (animal === "exit") {
      break;
    }

    console.log(`Details:\n${animal}`);

    const { action } = await inquirer.prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["Buy", "Not Buying", "Go Back"],
      },
    ]);

    if (action === "Buy") {
      console.log("Thanks for your purchase!");
      continueShopping = false;
    } else if (action === "Not Buying") {
      console.log("No Purchase made!");
      continueShopping = false;
    } else if (action === "Go Back") {
      // Continue the loop to allow selecting another animal
      continue;
    }
  }

  console.log("Thank you for visiting Mandi!");
}

askQuestion();
