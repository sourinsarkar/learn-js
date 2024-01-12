// function sum(num1, num2, functionToCall) {
//     let result = num1 + num2;
//     functionToCall(result);
// };

// function displayResult(input) {
//     console.log(`Rahul scored ${input} marks.`);
// };

function operations(num1, num2, operationToggle) {
    const answer = operationToggle(num1, num2);
    return answer;
}

function sum(num1, num2) {
    return num1 + num2;   
}

function minus(num1, num2) {
    if(num1 > num2)
        return num1 - num2;
    else
        return num2 - num1;   
}

const answer = operations(1, 2, sum);
console.log(answer);