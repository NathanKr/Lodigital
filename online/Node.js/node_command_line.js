// console.log(process.argv.length);
// console.log(process.argv[0]);
// console.log(process);
// console.log(process.platform);

//console.log(process.argv);
//console.log(process.argv.length);

let oper, num1, num2, result;
oper = process.argv[2];
num1 = Number(process.argv[3]);
num2 = Number(process.argv[4]);

//console.log(oper, num1, num2);

if (oper == "+") {
  result = num1 + num2;
}
else if(oper == "-") {
    result = num1 - num2;
}
else if(oper == "*") {
    result = num1 * num2;
}
else if(oper == "/") {
    result = num1 / num2;
}
else{
    console.log(`operation is not supported : ${oper}`);
}


console.log(`result is : ${result}`);
