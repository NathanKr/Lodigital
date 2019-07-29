let income = [];

// --- ************ CREATE ************
income.push({description : "salary 1" , amount : 10000});
income.push({description : "salary 2" , amount : 5000});
income.push({description : "rental" , amount : 3000});

console.log(income);


// -- ************* SEARCH\READ *************
// --  search 'rental' using filter
const descToSearch = 'rental';
const results = income.filter(item => item.description == descToSearch);
if(results.length > 0){
    console.log(`${descToSearch} was found`);
}
else{
    console.log(`${descToSearch} was not found`);
}

// -- ************* UPDATE ************* 
// -- change salary 1 amount by 100;
const descToUpdate = 'salary 2';
let updatedObj = income.find(item => item.description == descToUpdate);
if(updatedObj != undefined){
    updatedObj.amount = updatedObj.amount+100;
    console.log(`${descToUpdate} was updates`);
}
else{
    console.log(`${descToUpdate} was not found`);
}

// -- ************* DELETE ************* 
// -- remove the first item in the array
const deletedArray = income.splice(0,1);
if(deletedArray.length > 0){
    console.log('Item was deleted');
}
else{
    console.log('Item was not deleted');
}


console.log(income);