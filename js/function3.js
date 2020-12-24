//201224

// let friends = [];
// let i = 0; //전역변수로 선언하여 '하나씩' 증가하도록 설정 / 함수 안에 선언되면 출력값이 계속 늘어남

// function input_friend(){
//     let namef = document.getElementById('name').value;
//     let agef = document.getElementById('age').value;;
//     let hobbyf = document.getElementById('hobby').value;;
    
//     let friend= {};
//     friend.name = namef;
//     friend.age = agef;
//     friend.hobby = hobbyf;

//     friends[i++] = friend;
//     console.clear(); //기존 값 초기화

//     for(friend of friends){
//         for(field in friend){
//             console.log(friend[field]);
//         }
//     }

//   console.log(namef.value, agef.value, hobbyf.value);

    //<div id="show">Main</div>
    // document.getElementById('show').innerHTML = namef.value + ' , '
    //  + agef.value + ' , ' + hobbyf.value;

    //<input id="result"><br>
    // document.getElementById('result').value = namef.value + ' , '
    // + agef.value + ' , ' + hobbyf.value;
    
//}

let friends = [];
let i = 0;

function input_friend(){
    let namef = document.getElementById('name').value;
    let agef = document.getElementById('age').value;
    let hobbyf = document.getElementById('hobby').value;

    let friend = {};
    friend.name = namef;
    friend.age = agef;
    friend.hobby = hobbyf;

    let fTd1 = document.createElement('td');
    fTd1 = friend.name;

    let fTd2 = document.createElement('td');
    fTd2 = friend.age;

    let fTd3 = document.createElement('td');
    fTd3 = friend.hobby;

    let fLow = document.createElement('tr');
    fLow = fTd1, fTd2, fTd3;

    document.getElementById('friends').append(fLow);

}

