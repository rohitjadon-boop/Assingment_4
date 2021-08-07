const request=require("request");

request("http://www.google.com/2322",callback);

function callback(error,response,data){
    if(error)
    console.log("Error");
    else if(response.statusCode==404)
    console.log("Page Not Found");
    else
    console.log("Content",data);
}


