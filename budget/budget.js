var id_count=1 ;
var now = new Date();


function debugAdd(){
    var array = [
        {desc:'desc1' , amount : 100 , income_outcome : 'income'} ,
        {desc:'desc2' , amount : 200 , income_outcome : 'income'} ,
        {desc:'desc3' , amount : 10 , income_outcome : 'outcome'} ,
        {desc:'desc4' , amount : 20 , income_outcome : 'outcome'} ,
        {desc:'desc4' , amount : 30 , income_outcome : 'outcome'} ,
        ];


        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            document.getElementById('income_outcome').value = element.income_outcome;
            setDescription(element.desc);
            setAmount(element.amount);
            add();            
        }

        updatePercentageExpensesAll();
}


var month = ["Januray" , "Febuary" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];

setProfit(0);
setTotalIncome(0);
setTotalOutcome(0);

debugAdd();


document.querySelector('body > p:first-child').innerHTML += 
`${month[now.getMonth()]} ${now.getFullYear()}`;

function getProfitNumber(){
    return Number(document.getElementById('profit').innerText);
}

function getTotalIncomeNumber(){
    return Number(document.getElementById('total_income').innerText);
}

function getTotalOutcomeNumber(){
    return Number(document.getElementById('total_outcome').innerText);
}


function setProfit(value){
    document.getElementById('profit').innerText = value;
}

function setTotalIncome(value){
    document.getElementById('total_income').innerText = value;
}

function setTotalOutcome(value){
    document.getElementById('total_outcome').innerText = value;
}

function addElement(parentId, elementTag, elementId, html ,className) {
    // Adds an element to the document
    var parent = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    // newElement.setAttribute('id', elementId); same effect as below
    newElement.id = elementId;
    newElement.innerHTML = html;
    newElement.className = className;
    return parent.appendChild(newElement);
}

function getAmountObj(){
    return document.getElementById('amount');
}


function getAmount(){
    return getAmountObj().value;
}


function setAmount(amount){
    getAmountObj().value = amount;
}

function getIncome_outcomeObj(){
    return document.getElementById('income_outcome');
}
function getIncome_outcome(){
    return getIncome_outcomeObj().value;
}

function getDescriptionObj(){
    return document.getElementById('description');
}

function getDescription(){
    return getDescriptionObj().value;
}

function setDescription(description){
    getDescriptionObj().value = description;
}

function getColor(){
    return getIncome_outcome() == 'income' ? '28B9B5' : '#FF5049'
}

// getDescriptionObj().onfocus  = 
// getAmountObj().onfocus =
// getIncome_outcomeObj().onfocus =
//   function(){
//     this.style.border = `1px solid ${getColor()}`;                
// }

// getDescriptionObj().onf  = 
// getAmountObj().onfocus =
// getIncome_outcomeObj().onfocus =
//   function(){
//     this.style.border = `1px solid ${getColor()}`;                
// }


/*
    add is used for income and outcome list
*/
function add(){
    if ((getDescription() != "") && (getAmount() != ""))
    {
        var parentId = `list_${getIncome_outcome()}`;
        var isIncome =  getIncome_outcome() == 'income',
         amount = getAmount();
        elementTag = 'div';
        elementId = 'div'+ id_count;
        var percent =   isIncome ? 
                        '' : 
                        "<span>%</span><span class='percent-item'></span>";

        
        html = `<span>${getDescription()}</span>
                <span class='delete-item'>x</span>
                ${percent}
                <span class='amount-item'>${getAmount()}</span>`;

        id_count++;                
        var child = addElement(parentId, elementTag,
             elementId, html,'list-item'); 

        updateOnAdd();

        child.onclick = function (){
            var elemParent = this.parentElement;
            elemParent.removeChild(this);
            updateOnDelete(isIncome , amount)
        }

        setAmount("");
        setDescription("");
    }         
}

function updatePercentageExpensesAll(){
    var list_outcome = document.querySelectorAll('#list_outcome > .list-item');
    for (var index = 0; index < list_outcome.length; index++) {
        var element_outcome = list_outcome[index];
        var elemAmount = element_outcome.getElementsByClassName('amount-item')[0];
        var elemPercent = element_outcome.getElementsByClassName('percent-item')[0];
        elemPercent.innerText = Math.round(100*Number(elemAmount.innerText)/getTotalIncomeNumber());
    }
}

function updateOnDelete(isIncome , amount){
    if(isIncome){
        setTotalIncome(getTotalIncomeNumber() - amount);
    }
    else{
        setTotalOutcome(getTotalOutcomeNumber() - amount);
    }

    setProfit(getTotalIncomeNumber() - getTotalOutcomeNumber());
    updatePercentageExpensesAll();
}


function updateOnAdd(){
    if(getIncome_outcome() == 'income'){
        setTotalIncome(getTotalIncomeNumber() + Number(getAmount()));
    }
    else{
        setTotalOutcome(getTotalOutcomeNumber() + Number(getAmount()));
    }

    setProfit(getTotalIncomeNumber() - getTotalOutcomeNumber());
    updatePercentageExpensesAll();
}