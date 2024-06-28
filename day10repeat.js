let userchoice = prompt(
  "What would you like to buy?\n  1: Pencil ($5) \n  2: Rubber ($3) \n  3: Eraser ($2) \n  4: Notebook ($10) \n Write the item numbers separated by commas (e.g., 1,2,4)."
);

let selectedItems = userchoice.split(",").map(Number);

let quantityChoices = prompt(
  "Please mention the quantities for each item in the same order as you selected, separated by commas (e.g., 2,1,3 for 2 Pencils, 1 Rubber, 3 Notebooks)."
);

let quantities = quantityChoices.split(",").map(Number);

let object = {
  1: { name: "pencil", price: 5 },
  1: { name: "rubber", price: 10 },
  1: { name: "book", price: 20 },
};

let shop = (selectedItems, quantities) => {
  let totalCost = 0;
  selectedItems.forEach((item, index) => {
    if (userchoice == object[item]) {
      totalCost += object[item].price * quantities[index];
    }
  });

  return totalCost;
};
let totalCost = shop(selectedItems, quantities);
alert(`The total cost of the items you selected is $${totalCost}.`);
