// 201229

let x = 10;
let y = '20.55';
let z = '20';

let result = x + parseFloat(y); //parseFloat = 소수점까지 출력

result = x/0; // Infinity(무한값) 리턴
// result = x * y or x / y 는 문자열도 자동 int 전환하여 연산함

let result1 = x + parseInt(z); //parseInt를 통해 string -> int 타입변환
console.log(result);

function sum(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    document.write(parseInt(num1) + parseInt(num2));
}