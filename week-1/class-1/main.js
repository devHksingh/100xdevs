// console.log("hello world");
// console.log(a);


function greeting(first_name,last_name) {
    first_name = first_name.toUpperCase() 
    last_name = last_name.toUpperCase() 
    return `hi ${first_name} ${last_name}`
}

// console.log(greeting("hawk","dev"));

let isMarried =true

function check(){
    if(!isMarried){
        console.log("this person not married");
    }else{
        console.log("this person married");
    }
}

// check()

function number() {
    let count =0
    for(let i=0;i<5;i++){
        count+=i
        // console.log(count,i);
    }
    // console.log(count)
}

// number()

// complex primitive

let num = []
let evenNum =[]

function evenNumber(params) {
    for(let i=0;i<10;i++){
        num.push(Math.floor(Math.random()*100 +1))
        // console.log(Math.floor(Math.random()*100));
    }
    num.map((num)=>{
        if(num%2===0){
            evenNum.push(num)
        }
    })
}
evenNumber()
console.log(num.length);
console.log(evenNum);

function test() {
    let count 
    for (let index = 0; index < 1000000000000000; index++) {
        
        
    }
}
function sum(num1, num2,fnToCall) {
    let result = num1 + num2;
    fnToCall(result)
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

const ans =sum(1,2,displayResultPassive)