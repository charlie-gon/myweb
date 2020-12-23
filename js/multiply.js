
//구구단 출력

function mulTwo(){

    document.write('</table>');
    
    let two = 2;
    document.write('<table border="1">');
    for(let i = 1; i<10; i++){
        document.write('<tr>');
        document.write('<td>' + two + ' * ' + i + '</td>'
        + '<td>' + ' = ' + '</td>'
        + '<td>' + (two * i) + '</td>');
        document.write('</tr>');
        
    }
    document.write('</table>');
}

function mulThree(){

    document.write('</table>');
    
    let three = 3;
    document.write('<table border="1">');
    for(let i = 1; i<10; i++){
        document.write('<tr>');
        document.write('<td>' + three + ' * ' + i + '</td>'
        + '<td>' + ' = ' + '</td>'
        + '<td>' + (three * i) + '</td>');
        document.write('</tr>');
        
    }
    document.write('</table>');
}