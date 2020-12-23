//201223

//undefined

//문자열 30('')
let something = 0;
something = 1 > 2;

if(something){
    console.log("True")
}else{
    console.log("False")
}

//boolean = 값이 있거나 조건에 만족하는 경우 True / 값이 없거나 조건에 만족하지 않으면 False

//object
something = {
    name: 'Hong',
    age: 20,
    phone: '010-1111-2222'
    
}

//아래와 같이 표현하는 것 또한 가능
// let name = something.name;
// let age = something['age'];

//반복문을 활용한 출력
for(field in something){
    console.log(field);
    //something object가 가지고 있는 field를 루핑하여 값 출력

    console.log(field, something[field]);
    //something object안의 값 출력
}

// //자바에서 메소드 호출 하듯이 호출함
// console.log(something.age);
// console.log(something.name);

//배열
let nameAry = ['Hong','Park','Kim','Hwang','Lee'];
let name1 = nameAry[0];
let name2 = nameAry[1];

//배열 2번쨰 위치 값 바꾸기
nameAry[2] = 'Choi';

for(let i = 0; i<nameAry.length; i++){
    console.log('nameAry[' + i + ']' + ' = ' + nameAry[i]);
}

//of = 배열의 요소를 하나씩 출력
for(str of nameAry){
    console.log(str);
}

let i = 1;
document.write('<table border="1px solid black">');
for(str of nameAry){
    document.write('<tr><td>'  + i++ + '<td></td>' + str + '</td></tr>');
}
document.write('</table>');
