// Display a welcome message
alert("Welcome to my Stationery Shop");

// Prompt the user to input their choices
let userChoices = prompt(
  "What would you like to buy?\n  1: Pencil ($5) \n  2: Rubber ($3) \n  3: Eraser ($2) \n  4: Notebook ($10) \n Write the item numbers separated by commas (e.g., 1,2,4)."
);

// Convert the user input into an array of numbers
let selectedItems = userChoices.split(",").map(Number);

// Prompt the user to input the quantities for each selected item
let quantityChoices = prompt(
  "Please mention the quantities for each item in the same order as you selected, separated by commas (e.g., 2,1,3 for 2 Pencils, 1 Rubber, 3 Notebooks)."
);

// Convert the quantity input into an array of numbers
let quantities = quantityChoices.split(",").map(Number);

// Define the items and their prices
let items = {
  1: { name: "Pencil", price: 5 },
  2: { name: "Rubber", price: 3 },
  3: { name: "Eraser", price: 2 },
  4: { name: "Notebook", price: 10 },
};

// Function to calculate the total cost
let calculateTotal = (selectedItems, quantities) => {
  let totalCost = 0;
  selectedItems.forEach((item, index) => {
    if (items[item]) {
      totalCost += items[item].price * quantities[index];
    }
  });
  return totalCost;
};

// Check if the user has made valid selections and entered the same number of quantities
let isValidSelection =
  selectedItems.every((item) => items[item]) &&
  selectedItems.length === quantities.length;

if (isValidSelection) {
  // Calculate the total cost
  let totalCost = calculateTotal(selectedItems, quantities);
  alert(`The total cost of the items you selected is $${totalCost}.`);
} else {
  alert(
    "You have entered invalid item numbers or mismatched quantities. Please refresh and try again."
  );
}
