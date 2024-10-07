let text = '{"employees" :[' +
'{"firstName": "john", "lastName": "garry"},' +
'{"firstName": "Anna", "lastName": "Smith"},' +
'{"fisrtName": "Peter", "lastName": "Jones"}  ]}' 

const obj = JSON.parse(text)

document.getElementById("demo").innerHTML = obj.employees[1].firstName + " " + obj.employees[1].lastName