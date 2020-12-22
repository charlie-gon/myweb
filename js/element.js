// 201222

let show = document.getElementById('show');
console.log(show.innerHTML);


// console.log(show.getAttribute('id')); // getAttribute는 속성을 읽어올 때 사용
// console.log(show.id); 또한 속성을 위 내용과 결과값이 동일(속성 반환)

//전구 껐다 켜기

//getElementsByTagName = 태그 읽어옴
function turnOn(){
    let img1 = document.getElementsByTagName('img');
    img1[0].src = '/images/pic_bulbon.gif';
    //img1[0] = 가져온 값의 첫번째(0) 값을 반환한다는 의미
    console.log(img1);
}

function turnOff(){
    let img2 = document.getElementsByTagName('img');
    img2[0].src = '/images/pic_bulboff.gif';
    console.log(img2);
}