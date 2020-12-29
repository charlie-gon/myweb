// 201229

let numbers = [34, 55, 22, 10, 100, 6, 7];

numbers.sort(function(a, b){
    return b - a; //DESC
//    return a - b; //ASC
});
console.log(numbers);

// 큰 숫자부터 정렬하려면 1 반환
// 작은 숫자부터 정렬하려면 -1 반환하도록 유도


let ulTag = document.createElement('ul');
document.getElementById('show').append(ulTag);
let sum = 0;
numbers.forEach(function(item, idx, ary){
    sum += item;
    console.log(item, idx);
    let liTag = document.createElement('li');
    liTag.innerHTML = item;
    ulTag.append(liTag); //liTag가 ulTag의 하위로 append
});

let liTag = document.createElement('li');
liTag.innerHTML = 'sum: ' + sum;
ulTag.append(liTag);