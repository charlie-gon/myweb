// 201229

function page166() {


    let h2 = document.createElement('h2');
    h2.innerHTML = '입력 양식 데이터 전송 버튼';

    //<form>
    let form = document.createElement('form');

    //<p>
    let name = document.createElement('p');
    name.innerHTML = '이름: ';

    //<p><input>
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute("name","홍길동");
    name.append(input);

    //<p>
    let major = document.createElement('p');
    major.innerHTML = '학과: ';

    //<p><input>
    let input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute("name","전자과");
    major.append(input1);

    //<p><p>
    let p = document.createElement('p');

    //<input>
    let input2 = document.createElement('input');
    input2.setAttribute("type","submit");
    input2.setAttribute('value', '전송');

    form.append(name);
    form.append(major);
    form.append(p);
    form.append(input2);


    document.getElementById('show').append(h2);
    document.getElementById('show').append(form);

}

