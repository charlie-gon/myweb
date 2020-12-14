<%@page language="java" contentType="text/html; charset=UTF-8" 
pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/radio.jsp</title>
</head>
<body>
    <!-- 자바 표현 -->
    <!-- 배열은 값 하나만 루핑 가능 -->

 

    <%
        String[] userName = request.getParameterValues("subject");
    %>

    <%
        for(String user : userName){
    %>
            <h3><%=user%></h3>
    <%
        }
    %>


</body>
</html>