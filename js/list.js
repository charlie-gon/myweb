//document.write에는 <h1>과 같은 태그 삽입도 가능

document.write("<p>방가방가<p>");

document.write("<ul><li>Apple</li><li>Banana</li></ul>");

// 반복문
document.write('<ul>');
for (let i = 1; i <= 10; i++) {
    document.write("<li>" + "<p>i의 값은: " + '<b>' + i + '</b>' + ' 입니다.' + '</p>' + "</li>");
}
document.write('</ul>');

// 구구단 4단

//main.html <style> 활용

let dan = 4;
document.write('<ul>');
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        document.write('<li class="even">' + '<p>' + dan + ' * ' + i + ' = ' + '<b>' + (dan * i) + '</b>' + '</p>' + '</li>');

    } else {
        document.write('<li class="odd">' + '<p>' + dan + ' * ' + i + ' = ' + '<b>' + (dan * i) + '</b>' + '</p>' + '</li>');

    }
}
document.write('</ul>');

//myFunc 정의
function myFunc() {
    document.write('<table width="300px" height="80px" border="1px solid black">');

    for (let i = 1; i <= 10; i++) {
        document.write('<tr>');
        document.write('<td>' + 'i의 값은: ' + '</td>'
            + '<b>' + '<td>' + i + '</td>' + '</b>'
            + '<td>' + ' 입니다.' + '</td>');

        document.write('</tr>');
    }
}
document.write('</table>');