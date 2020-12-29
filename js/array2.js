// 201229


//object.html의 sum누르면 배열에 추가 / minus 누르면 배열에서 제외

fruits =[];

function sum(){
    let i = document.getElementById('num1').value;
    i.push(i);
    console.log(i);
}

function minus(){
    fruits.pop();
}