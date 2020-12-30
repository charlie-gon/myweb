// 201229

let fruits = ['Apple','Banana'];
fruits[2] = 'Melon';
fruits[fruits.length] = 'Kiwi';
fruits[fruits.length] = 'Mango';

//Change the value
fruits[2] = '딸기';

//Delete the value
delete fruits[2]; //undefined

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

fruits = [];
fruits.push('Apple');
fruits.push('Banana');
fruits.unshift('Orange'); //unshift = 앞쪽에 우선 출력
fruits.unshift('Peach');

//fruits.shift(); = 첫번째 위치의 값 제거
//fruits.unshift(); = 첫번째 위치에 값 삽입 

//fruits.pop(); //마지막 값 삭제

//fruits.splice(a, b) = a: 추가할 위치 / b: 제거할 값 갯수
//fruits.splice(1,1); //Orange 삭제


//splice 기능 = 삭제 및 추가
let fruit = fruits.splice(1,0,'New Orange');
console.log(fruit);

for(fruit of fruits){
    console.log(fruit);
}

fruits = ['Apple','Banana','Mango'];
fruit = {
    name: 'Apple',
    price: 2000,
    weight: 50
}

// Object와 Array의 차이점(name based / index based)
fruit['name']; // == fruit.name / name based
fruits[0]; //index based