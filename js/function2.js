//201223


// let name1 = window.prompt('숫자 입력');
// let name2 = window.prompt('숫자 입력');



//입력받은 두 수 사이의 합
//1, 5를 입력했다면 5제외 1~4의 합을 구하시오
// diffSum(name1, name2); 

// function diffSum(a, b){
//     let n1 = parseInt(a);
//     let n2 = parseInt(b);

//     let sum = 0;
//     for(let i = n1; i < n2; i++){
//         sum += i;
//     }
//     console.log(sum);

// }

//5개 숫자 입력 후 가장 큰 수 출력 ver.1
// let numAry = [];
// let max = 0;
// let min = 0;

// for (let i = 0; i < 5; i++) {
//     let typeNum = window.prompt(i + '번째 숫자 입력');
//     numAry[i] = parseInt(typeNum);
// }
// findMax();

// function findMax() {
//     for (value of numAry) {
//         if (max < value) {
//             max = value;
//         }
//     }
//     document.write('가장 큰 숫자: ' + max);
// }

        //5개 숫자 입력 후 가장 큰 수 및 작은 수 출력
        // for(let i = 0; i<5; i++){
        //     numAry[i] = parseInt(window.prompt(i + 1) + '번째 숫자 입력');
        // }

        // for(let i = 0; i<numAry.length; i++){
        //     if(max < numAry[i]){
        //         max = numAry[i];
        //     }
        // }

        // min = numAry[0];
        // for(let i = 0; i<numAry.length; i++){
        //     if(min > numAry[i]){
        //         min = numAry[i];
        //     }
        // }

        // document.write('최대값: ' + max + '<br>');
        // document.write('최소값: ' + min + '<br>');


    //점수에 따른 등급 출력
    // checkGrade(name1);
    //100 = A, 90 <= B, 80 <= C, etc = D

    // function checkGrade(a){
    //     let n1 = parseInt(a);
    //     if(n1 == 100){
    //         console.log(n1 + ' = ' + 'A');
    //     }else if(n1 => 90){
    //         console.log(n1 + ' = ' +'B');
    //     }else if(n1 => 80){
    //         console.log(n1 + ' = ' +'C');
    //     }else(n1 < 80)
    //         console.log(n1 + ' = ' +'D');
    // }



    //숫자 입력 -> 합계 구하기
    // sum(name1, name2);

    // function sum(a, b){
    //     let n1 = parseInt(a); //str -> int 변환
    //     let n2 = parseInt(b);
    //     console.log(n1 + n2);
    // }

    //201224

    // //object 외부에 필드 선언
    // let friend1 = {} //object
    // friend1.name = 'Hong'; //field
    // friend1.age = 20; //field

    // //object 내부에 필드 선언
    // let friend2 = { //object
    //     name: 'Hwang', //field
    //     age: 20, //field
    // }
    //field정의 시 ' = ' 이 아니라 ' : ' 사용!
    
    // friends[0] = friend1;
    // friends[1] = friend2;
    // for(friend of friends){ //fields값 하나씩 루핑
    //     for(field in friend){ //field 겟
    //         console.log(field + ' : ' + friend[field])
    //     }
    // }



    //친구 3명 이름, 나이 입력값 출력
    // let friends = [];
    
    // for(let i = 0; i<3; i++){

    //     let names = window.prompt('이름 입력: ');
    //     let age = window.prompt('나이 입력: ');

    //     let friend = {}; //object
    //     friend.name = names;
    //     friend.age = age;

    //     friends[i] = friend; //object값 friends 배열에 삽입
    // }

    // document.write('<table border="1 solid black"  width="300px" height="80px">');
    // document.write('<tr>');
    // document.write('<th>이름</th>');
    // document.write('<th>나이</th>');
    // document.write('</tr>');

    // for(friend of friends){
    //     document.write('<tr>');
    //     for(field in friend){
    //         document.write('<td>' + friend[field] + '</td>');
    //     }
    //     document.write('</tr>');
    // }
    // document.write('</table>');



        
    




  
    
        


