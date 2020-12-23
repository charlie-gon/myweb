//구구단 4단

let dan = 4;

document.write('<table border="1 solid black">');

for(let i = 1; i <=9; i++){
    document.write('<tr>');
    document.write('<td>' + dan + ' * ' + i + '</td>' 
    + '<td>' + ' = ' + '</td>' 
    + '<td>' +(dan * i) + '</td>');
    document.write('</tr>');
}

document.write('</table>');