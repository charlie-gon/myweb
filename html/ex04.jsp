<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/ex04.jsp</title>
</head>
<body>

    <%
        String mailing = request.getParameter("mail");
    %>

        <h3><%=mailing%></h3>

        
        <%
        String[] result = request.getParameterValues("input");
        %>
        
        <%
        for(String values : result){
            
            %>
            <h3><%=values%></h3>
            <%    
        }
        %>
        
        <%
            String[] cellphone = request.getParameterValues("phonenum");
        %>

        <%
            for(String num : cellphone){

        %>
           <h3><%=num%></h3>
                
           <%
            }
            %>

    
    </body>
    </html>