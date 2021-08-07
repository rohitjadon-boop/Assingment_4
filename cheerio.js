const request = require("request");
const cheerio = require("cheerio");

request("https://www.npmjs.com/package/cheerio", callback);

function callback(error, response, data) {
    if (error)
        console.log(error);
    else if (response.statusCode == 404)
        console.log("Page Not Found");
    else {
        dataExtract(data);
    }
}

function dataExtract(data) {
    let search = cheerio.load(data);
    let responseObject = search("#readme>h1");
    let text = responseObject.text().trim();
    console.log(text);
}

console.log("After");