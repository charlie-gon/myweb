// 201217

var name = document.getElementById('show').innerHTML;
console.log(name);
document.getElementById('show').innerHTML = "World";

// createElement: 태그생성
var divTag = document.createElement("div");
divTag.innerHTML = "Nice"; // == <div>Nice</div>

document.getElementById('show').append(divTag); //show 아이디에 divTag 삽입
//after와 append의 차이는?

var li_1 = document.createElement("li");
var li_2 = document.createElement("li");

li_1.innerHTML = "Apple";
li_2.innerHTML = "Orange";

document.getElementById('fruit').append(li_1);
document.getElementById('fruit').append(li_2);

//태그가 어떻게 그려지는지 머리속에 그려져야 한다!

//테이블 만들기
var tr1 = document.createElement("td");
var tr2 = document.createElement("td");

var td1 = document.createElement("td");
var td2 = document.createElement("td");

tr1.innerHTML = "name";
tr2.innerHTML = "Hong";

td1.innerHTML = "age";
td2.innerHTML = "15";

document.getElementById('tbl').append(tr1);
document.getElementById('tbl').append(tr2);
document.getElementById('tbl').append(td1);
document.getElementById('tbl').append(td2);

//구구단 출력
for(var i = 1; i<=9; i++){
    var str = '2 * ' + i + ' = ' + ' 2 ' * i;
    console.log(str);
}

//구구단 합계 출력
var sum = 0;
for(var i = 1; i<=9; i++){
    var str = '2 *' + i + ' = ' + '2' * i;
    sum += str;
}
console.log(sum);