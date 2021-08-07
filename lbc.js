const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";

let request=require("request");
let cheerio=require("cheerio");

request(url,callback);

function callback(error,response,data){
    if(error)
    console.log(error);
    else if(response.statusCode==404)
    console.log("Page Not Found");
    else{
        dataExtract(data);
    }
}

function dataExtract(data){
    let searchTool=cheerio.load(data);
    let eleArray=searchTool(".match-comment-long-text");
    let text=searchTool(eleArray[1]).text();
    console.log(text);

}
