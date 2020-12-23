//201223

function sum(num1, num2){
    let result = num1 + num2;
    console.log(result);
    return result;
}

let result = sum(10, 20);
document.write('<h1>' + result + '</h1>');

let myfunc = function(a, b){
    let result = a * b;
    console.log(result);
    return result;
}
//변수 이름 뒤에 () 붙이면 해당 변수 이름으로 정의된 함수를 출력하겠다는 의미
result = myfunc(4,6);
document.write('<h1>' + result + '</h1>');

let yourfunc = myfunc;
result = yourfunc(5,7);

console.log(result);


let theotherfunc = function(n1, n2){
    return n1 / n2;
}

function otherfunc(a, b, funcdef){
    let result = funcdef(a, b);
    console.log('result: ' + result);
}
otherfunc(20, 30,theotherfunc);