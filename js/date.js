// 201230

참고
https://medium.com/@nitinpatel_20236/challenge-of-building-a-calendar-with-pure-javascript-a86f1303267d

// let today = new Date('2020-12-15');
// console.log(today.getDay());

// function setCal(yyyy, mm, dd){
//     let today = new Date(yyyy + ' ' + mm + ' ' + dd);
//     today = new Date(yyyy, mm, 0);
//     console.log(today.getDate());
// }

// setCal('2020','05','04');



function showCal(year, month){
    let firstDay = (new Date(year, month)).getDay();

    tbl = document.getElementById('calendar-body');

    tbl.innerHTML = "";


}


