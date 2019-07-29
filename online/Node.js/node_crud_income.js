let income = [];

// ******** CREATE \ ADD ********
income.push({ description: "salary 1", amount: 10000 });
income.push({ description: "salary 2", amount: 5000 });
income.push({ description: "rental", amount: 3000 });

console.log(income);

// ******** SEARCH \ READ
const descToSearch = "rental";
const results = income.filter(item => item.description == descToSearch);
if (results.length > 0) {
  console.log(`${descToSearch} was found`);
} else {
  console.log(`${descToSearch} was not found`);
}

// ******** UPDATE
const descToUpdate = "salary 2";
let updatedObj = income.find(item => item.description == descToUpdate);
if (updatedObj != undefined) {
  updatedObj.amount += 100;
  console.log(`${descToUpdate} amount was updated`);
} else {
  console.log(`${descToUpdate} amount was not updated`);
}

// ******** DELETE
// --- remove the first item
const deletedItems = income.splice(0, 1);
if (deletedItems.length > 0) {
  console.log(`first item was removed`);
} else {
  console.log(`first item was not removed`);
}

console.log(income);
