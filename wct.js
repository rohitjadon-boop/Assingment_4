const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";

const request = require("request");
const cheerio = require("cheerio");

request(url, (error, response, data) => {
    if (error)
        console.log(error);
    else if (response.statusCode == 404)
        console.log("Page Not Found");
    else {
        dataExtract(data);
    }
})

function dataExtract(data) {
    let search = cheerio.load(data);
    let tableArray = search(".table.bowler tbody tr");
    console.log(tableArray.length);
    let maxWicket = 0;
    let maxWicketTaker = "";
    for (let i = 0; i < tableArray.length; i++) {
        let tableData = search(tableArray[i]).find("td");
        let name = search(tableData[0]).text();
        let wicket = search(tableData[4]).text();
        // console.log(name+" "+wicket);
        if (wicket > maxWicket) {
            maxWicket = wicket;
            maxWicketTaker = name;
        }
    }
    console.log(maxWicketTaker + " " + maxWicket);
}

