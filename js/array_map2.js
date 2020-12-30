// 201230


let students = [];
for(let i = 1; i<=5; i++){
    let std = {};
    std.sno = i;
    std.sname = 'Hong' + i;
    std.sgen = i % 2 == 0 ? 'M' : 'F';
    std.score = 80 + i;
    students.push(std);
}

//every = 배열의 모든 값이 조건을 만족할 때 리턴
let result = students.every(function(a, b, c){
    return a.score > 80;
});
console.log(result);

//some = 하나라도 만족하면 리턴
let result1 = students.some(function(a, b, c){
    return a.score > 81;
});
console.log(result1);

let result2 = students.map(function(a){
    return a.sname;
}).indexOf('Hong1');
console.log(result2);

//reduce

// let result = students.map(function(a, b, c){
    //     console.log(a, b, c);
//     return a.score;
// }).reduce(function(a, b, c, d){
//     return a += b;

// });

// console.log('result: ' + result);
// //return a.score > b.score ? a.score : b.score; //max값