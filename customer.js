var express = require('express');
var app = express();

var CustomeraccountController=function(request, response){
 
  var customeraccountDetails = [
    {customerId:1, customerName:"amol",amount:1000, status:"working"},
    {customerId:2, customerName:"mahesh",amount:0, status:"closed"},
	{customerId:3, customerName:"naresh",amount:4000,status:"working"}
		
  ];
  
  response.send(customeraccountDetails);
};
 
app.get('/',CustomeraccountController);

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("App is running on http://localhost:3000", host, port)
})