const incomes_module = require("./incomes");


let mode = process.argv[2];
let income, desc, amount;

if (mode == "add") {
  desc = process.argv[3];
  amount = Number(process.argv[4]);
  incomes_module.addIncome(desc, amount);
} else if (mode == "getAll") {
  console.log(incomes_module.getAllIncomes());
} else if (mode == "search") {
  desc = process.argv[3];
  income = incomes_module.getIncome(desc);
  if (income != null) {
    console.log(`description : ${desc} , amount : ${income.amount}`);
  } else {
    console.log(`description : ${desc} was not found`);
  }
} else if (mode == "update") {
  desc = process.argv[3];
  amount = Number(process.argv[4]);
  if (incomes_module.updateIncome(desc, amount) == false) {
    console.log(`description : ${desc} was not found`);
  }
} else if (mode == "delete") {
  desc = process.argv[3];
  if (incomes_module.deleteIncome(desc) == false) {
    console.log(`description : ${desc} was not removed`);
  }
} else {
  console.log(`mode : ${mode} not supported`);
}
