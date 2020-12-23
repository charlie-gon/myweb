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

    //5개 숫자 입력 후 가장 큰 수 출력
    let numAry = [];
    let max = 0;
    let min = 0;

        for(let i = 0; i<5; i++){
            numAry[i] = parseInt(window.prompt(i + 1) + '번째 숫자 입력');
        }
        
        for(let i = 0; i<numAry.length; i++){
            if(max < numAry[i]){
                max = numAry[i];
            }
        }

        min = numAry[0];
        for(let i = 0; i<numAry.length; i++){
            if(min > numAry[i]){
                min = numAry[i];
            }
        }

        document.write('최대값: ' + max + '<br>');
        document.write('최소값: ' + min + '<br>');


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


