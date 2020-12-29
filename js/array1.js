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

//fruits.pop(); //마지막 값 삭제
//fruits.shift(); //첫번째 값 삭제 / 중요하다
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