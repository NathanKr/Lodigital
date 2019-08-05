const file = "my_income.txt";

const fs = require("fs");

let incomes = [];

incomes = getAllIncomes();


function addIncome(description,amount)
{
    let income = { description: description, amount: amount };
    incomes.push(income);
  
    saveIncomes();
}

function saveIncomes() {
    fs.writeFileSync(file, JSON.stringify(incomes));
  }

function getAllIncomes() {
    try {
      let data = fs.readFileSync(file);
      return JSON.parse(data);
    } catch (error) {
        console.log(error)
      return [];
    }
  }

  function getIncome(description){
    income = incomes.find(item => item.description == description);

    if (income != undefined) {
      return income;
    } else {
      return null;
    }
  }


  function updateIncome(description,amount){
    let income = incomes.find(item => item.description == description);

    if (income != undefined) {
      income.amount = amount;
      saveIncomes();
      return true;
    } else {
      return false;
    }
  }

  function deleteIncome(description){
    let result;

    let index = incomes.findIndex(item => item.description == description);
    if (index != -1) {
      const results = incomes.splice(index, 1);
      if (results.length == 0) {
        result = false;
      } else {
        saveIncomes();
        result = true;
      }
    } else {
        result = false;
    }

    return result;
  }

  module.exports.getAllIncomes = getAllIncomes;
  module.exports.addIncome = addIncome;
  module.exports.getIncome = getIncome;
  module.exports.updateIncome = updateIncome;
  module.exports.deleteIncome = deleteIncome;
  