const fs = require("fs");
let mode = process.argv[2];
let incomes = [];
const file = "my_income.txt";
let income, desc, amount;

function getIncomesFromFile() {
  let incomes;
  try {
    let data = fs.readFileSync(file);
    incomes = JSON.parse(data);
  } catch (error) {
    incomes = [];
  }

  return incomes;
}

function saveIncomes() {
  fs.writeFileSync(file, JSON.stringify(incomes));
}

incomes = getIncomesFromFile();

if (mode == "add") {
  desc = process.argv[3];
  amount = Number(process.argv[4]);

  income = { description: desc, amount: amount };
  incomes.push(income);

  saveIncomes();
} else if (mode == "getAll") {
  console.log(incomes);
} else if (mode == "search") {
  desc = process.argv[3];

  income = incomes.find(item => item.description == desc);

  if (income != undefined) {
    console.log(`description : ${desc} , amount : ${income.amount}`);
  } else {
    console.log(`description : ${desc} was not found`);
  }
} else if (mode == "update") {
  desc = process.argv[3];
  amount = Number(process.argv[4]);

  let income = incomes.find(item => item.description == desc);

  if (income != undefined) {
    income.amount = amount;
    saveIncomes();
  } else {
    console.log(`description : ${desc} was not found`);
  }
} else if (mode == "delete") {
  desc = process.argv[3];
  let index = incomes.findIndex(item => item.description == desc);
  if (index != -1) {
    const results = incomes.splice(index, 1);
    if (results.length == 0) {
      console.log("income was not removed");
    } else {
      saveIncomes();
    }
  } else {
    console.log(`description ${desc} was not found`);
  }
} else {
  console.log(`mode : ${mode} not supported`);
}
