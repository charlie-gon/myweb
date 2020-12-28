// 201228

let str = 'Please locate where "locate" occurs!';
let strLeng = str.length;

console.log(strLeng);

// indexOf, lastIndexOf, search

strLeng = str.indexOf('locate'); //찾는 문자열 있으면 해당 문자열 위치 리턴
strLeng = str.indexOf('locates'); //찾는 문자열 없으면 -1 리턴

str.lastIndexOf('locate');

str.search('locate');

console.log(strLeng);
console.log(str.lastIndexOf('locate'));
console.log(str.search('locate'));

// slice, substring, substr

let fruit = 'Apple, Banana, Kiwi';

// slice
let result = fruit.slice(0, 5); //0포함 5 제외한 값 출력
console.log('slice: ' + result);

// substring / 시작하는 인덱스부터 지정된 값까지 출력
let from = fruit.indexOf('Banana');
let result2 = fruit.substring(from, from + 6);
console.log('substring: ' + result2);

// substr
let from2 = fruit.indexOf('Apple');
let result3 = fruit.substring(from2, 6);
console.log('substr: ' + result3);

// replace
let newFruit = fruit.replace('Banana', 'Orange');
console.log('replace: ' + newFruit);

// toUpperCase, toLowerCase, concat, trim, padStart, padEnd

console.log('trim: ' + 'hel    lo'.trim());
console.log('trim' + ' + ' + ' toUpperCase: ' + 'hel    lo'.trim().toUpperCase());
console.log('padStart: ' + '5'.padStart(4, 0));
console.log('padEnd: ' + '5'.padEnd(4, 0));

let url = 'http://www.naver.com';
console.log('net을 com으로 변환: ' + url.replace('net', 'com'));

let url2 = 'http://www.naver.com';
console.log('복잡하게 해보기: ' + url2.replace(url2.lastIndexOf('.'), 'com'));

let url3 = 'http://www.naver.com';
console.log('복잡하게 해보기: ' + url3.replace(url3.substring(url3.lastIndexOf('.')), 'com'));

//중요!!!!!!!!!!!!!!!!!

let fruits = fruit.split(','); //split은 배열 생성한다
for (f of fruits) {
    console.log('split: ' + f.trim()); //trim은 공란 제거
}

//2000년 이전,이후 구분 -> 1,3 = 남자 / 2,4 = 여자


function getGender(num){

    let yourNum = num.slice(7,8);
    if(yourNum == '1'){
        return 'Male';
    }else if(yourNum == '2'){
        return 'Female';
    }else if(yourNum == '3'){
        return 'Male';
    }else if(yourNum == '4'){
        return 'Female';
    }else{
        return 'You are anonymous';
    }
    }

// function getGender(num) {
//     let fNum = num.substring(7, 8);
//     if (fNum == '1') {
//         return 'Male';
//     } else if (fNum == '2') {
//         return 'Female';
//     } else if (fNum == '3') {
//         return 'Male';
//     } else if (fNum == '4') {
//         return 'Female';
//     } else {
//         return 'False';
//     }
// }

let numbers = '990101-3234567';
numbers += ' 990102-2345678';
numbers += ' 000201-3456789';
numbers += ' 000202-4567890';
numbers += ' 0003014567890';

let numAry = numbers.split(' ');
for (num of numAry) {
    result = getGender(num);
    console.log('결과: ' + result);
}