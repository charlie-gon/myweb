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

    // let friend = {};
    // friend.name = namef;
    // friend.age = agef;
    // friend.hobby = hobbyf;

    let info = document.getElementById('showFriends');
    let fTr = document.createElement('tr');
    let fTd1 = document.createElement('td');
    let fTd2 = document.createElement('td');
    let fTd3 = document.createElement('td');

    fTd1.innerHTML = namef;
    fTd2.innerHTML = agef;
    fTd3.innerHTML = hobbyf;

    info.append(fTr);
    fTr.append(fTd1);
    fTr.append(fTd2);
    fTr.append(fTd3);

    


}

