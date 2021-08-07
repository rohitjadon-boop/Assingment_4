const request=require("request");
const cheerio=require("cheerio");

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";

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
    let search=cheerio.load(data);
    let tableArray = search(".table.bowler tbody tr");
    for(let i=0;i<tableArray.length;i++){
        let anchor=search(tableArray[i]).find("a");
        let link=anchor.attr("href");
        let fullLink=`http://www.espncricinfo.com${link}`;
        request(fullLink,newcallback);
    }
}

function newcallback(error,response,data){
    if(error)
    console.log(error);
    else if(response.statusCode==404)
    console.log("Page Not Found");
    else{
        ageExtract(data);
    }
}

function ageExtract(data){
    let search=cheerio.load(data);
    let array=search(".player-card-description");
    let age=search(array[2]).text();
    let name=search(array[0]).text();
    console.log(name+" "+age);
    console.log("`````````````````````````````````");

}