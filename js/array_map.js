// 201230

let person = {}; // new Object();
person.name = 'Hong';
person.age = 10;

person = {
    name: "Hwang",
    age: 15
}
console.log(person);

function Person(name, age){
    this.name = name;
    this.age = age;
}

person = new Person('Park',20);
console.log(person);

let persons = [];

persons.push(person);
//여러개 담기
persons.push(new Person('Happy', 21));
persons.push(new Person('New', 22));
persons.push(new Person('Year', 23));

//map
//forEach와 차이점 = map은 return 있음
let names = persons.map(function(a, b, c){
    
    let member = {};
    member.id = a.name + ' ' + b;
    member.age = a.age;
    return member;
});

//filter = 조건 True만 리턴
let over21 = persons.filter(function(a, b, c){
    return a.age > 21;
}).map(function(a, b, c){ //map과 연동 가능
    return a.name;
});
console.log(over21);

console.log(names);
