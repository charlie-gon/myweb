// 201229

//let persons = ['Hong','Hwang','Park','Choi'];

// persons.forEach(myCallBack); // a, b, c == value,index, array[]

// function myCallBack(a, b, c){
//     console.log(a, b, c);
// }


//list로 출력하기
// let ulTag = document.createElement('ul');
// document.getElementById('show').append(ulTag);

// persons.forEach(myCallBack);

// function myCallBack(name, idx, ary){
//     console.log(name, idx);
//     let liTag = document.createElement('li');
//     liTag.innerHTML = name;
//     ulTag.append(liTag);
// }

// let liTag = document.createElement('li');

let persons = [];

let person = {
    name: '꼬부기',
    age: 20,
    score: 90
}

persons.push(person);

let person1 = {};
person1.name = '고라파덕';
person1.age = 21;
person1.score = 80;

persons.push(person1);

//persons.push('피카츄'); //배열이 아닌 일반 string 타입으로 출력

console.log(persons);


// function drawTable(){

//     let tbl = document.createElement('table');
//     let tr = document.createElement('tr');
//     let td = document.createElement('td');

//     tbl.append(tr);
//     tr.append(td);
//     document.getElementById('show').append(tbl);

//     tbl.append(persons.forEach(function(a, b, c){

//     }));

// }

//테이블로 출력

function drawTable() {
    let titles = ['이름', '나이', '점수'];

    let tableTag = document.createElement('table');
    tableTag.setAttribute('border', 1);

    let trTag = document.createElement('tr');
    for (title of titles) {
        let tdTag1 = document.createElement('th');
        tdTag1.innerHTML = title; //trTag 값 출력
        trTag.append(tdTag1);
    }

    tableTag.append(trTag); // 타이틀 생성
    document.getElementById('show').append(tableTag); // 데이터 생성

    persons.forEach(function (item, idx, ary) {
        let trTag = document.createElement('tr');
        for (field in item) {
            let tdTag1 = document.createElement('td');
            tdTag1.innerHTML = item[field]; //item(object)에 이름,나이,점수 3개가 모두 있기 때문에
            trTag.append(tdTag1);
        }

        tableTag.append(trTag);

    });

   
}