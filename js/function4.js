//201224

function input_friend(){
    let fruit = document.getElementById('fruit').value;
    let liTag2 = document.createElement('li');
    liTag2.innerHTML = fruit;
    document.getElementById('fruits').append(liTag2);

  document.getElementById('fruit').value = ''; //입력란 초기화(공백처리)
    console.log(fruit);

}

let ulTag = document.createElement('ul');
ulTag.innerHTML = 'Apple'
ulTag.id = 'fruits';

let liTag = document.createElement('li');
liTag.innerHTML = 'Banana';
let liTag1 = document.createElement('li');
liTag1.innerHTML = 'Orange';

ulTag.append(liTag);
ulTag.append(liTag1);

document.getElementById('show').append(ulTag); //id="show" 영역에 붙이겠음
