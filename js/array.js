//201223

let friend1 = {
    name: '빌게이츠',
    age: 20,
    hobby: '먹방'
}

let friend2 = {
    name: '제프 베조스',
    age: 25,
    hobby: '쇼핑'
}

let friend3 = {
    name: '마이클 블룸버그',
    age: 22,
    hobby: '잠자기'
}

let friends = [friend1, friend2, friend3];

document.write('<table border="1"><tr>');

for(field in friend1){
    document.write('<th>' + field + '</th>');
}
document.write('</tr>');

for(friend of friends){
    document.write('<tr>');
    for(field in friend){
        document.write('<td>' + friend[field] + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');

let numbers = [3,4,8,6,33,24,67];
let sum = 0;

//배열은 of로 가져옴

//합계
for(num of numbers){
    if(num % 2 == 1) //홀수만
    sum += num;
}
console.log('합계: ' + sum);

//가장 큰수
let max = 0;
for(num of numbers){
    if(max < num){
        max = num;
    }
}
console.log('가장 큰수: ' + max);

//가장 작은수
let min = numbers[0];
for(num of numbers){
    if(min > num){
        min = num;
    }
}
console.log("가장 작은수: " + min);



//짝수 합계

//홀수 합계

//평균