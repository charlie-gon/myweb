//201217
//js.html과 연동하여 table생성

var tableTag = document.getElementById('tbl');


//line1
var trTag1 = document.createElement('tr');

var tdTag1 = document.createElement('td');
tdTag1.innerHTML ='Name';
tdTag1.setAttribute('id', 'first');//js.html페이지의 .title 스타일 설정값 불러오기

tdTag1.setAttribute('class', 'title');//js.html페이지의 .title 스타일 설정값 불러오기

var tdTag2 = document.createElement('td');
tdTag2.innerHTML ='Age';
tdTag2.setAttribute('class','title');
trTag1.append(tdTag1);
trTag1.append(tdTag2);

console.log(trTag1);

//line2
var trTag2 = document.createElement('tr');

var tdTag1 = document.createElement('td');
var tdTag2 = document.createElement('td');

tdTag1.innerHTML = "김김";
tdTag1.setAttribute('class','data'); //js.html페이지의 .data 스타일 설정값 불러오기

tdTag2.innerHTML = "21살";
tdTag2.setAttribute('class','data');//js.html페이지의 .data 스타일 설정값 불러오기

trTag2.append(tdTag1);
trTag2.append(tdTag2);

//html 변환 체크
console.log(trTag2);

//table 출력
tableTag.append(trTag1);
tableTag.append(trTag2);