let num = 10, num3 = 20;

let result = num + num3;
console.log("result: " + result + " 입니다.");

if(result > 30){
    console.log("30보다 크다");
} else{
    document.write("<h1>30보다 작거나 같다.</h1>");
}

//document.write를 하면 console영역이 아닌 html영역에 값이 출력된다.
//document.write에는 <h1<과 같은 태그 삽입도 가능


var str = 'Hello World';
str = 25;
str = 1 < 2;
str = null;
str = function(){
    console.log('function');
}

str = 10 + 20;

// str 두 개 쓰면 str의 타입과 값 출력
// console.log(typeof str, str);

console.log(typeof str, str);

num1 = 10;
console.log(num1);


// let num2 = 20;
// console.log(num2);
// let num2 = 30;
// console.log(num3);

//let은 var에 비해 자유도는 떨어지지만, 좀 더 규칙적인 프로그래밍 가능
//let은 중복을 허용하지 않음(두 번 사용 안됨)