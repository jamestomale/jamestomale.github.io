var env = require("dotenv").config();
var fs = require("fs");
var request = require("request")

var keys = require("./keys.js");

var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

console.log("spotify = " + spotify);
// console.log("client = " + client);

var defaultMovie = "Mr. Nobody";
var defaultSong = "The Sign by Ace of Base";

var whatToDo = process.argv[2];
var withThis = process.argv[3];
var outputData = "";
var outputBreak = "\n --------------- \n"


function liriThis(whatToDo, withThis) {
    switch(whatToDo) {
        case "my-tweets":
            console.log("my tweets");
            tweeted();
            break;
        case "spotify-this-song":
            console.log("spotify");
            listened(withThis);
            break;
        case "movie-this":
            console.log("movie");
            watched(withThis);
            break;
        case "do-what-it-says":
            console.log("doing this");
            fs.readFile("random.txt", "utf8", function(err, data) {
            if (err) {
                outputData = "Error reading random.txt";
            } else {
                var randomArr = data.split(",");
                whatToDo = randomArr[0];
                withThis = randomArr[1];
                liriThis(whatToDo, withThis)
            }
            })
            break;
        default:
            console.log("sorry I don't understand");
            doOutput("Huh??")
            
    }
}

function tweeted() {
    console.log("tweeting")
    //generated output string of last 20 tweets
}

function listened(song) {
    console.log("listening")
    if (!song) song = defaultSong;
    
        //if no song is provided use defaultSong
        // Output the following:
        // Artist(s)
        // The song's name
        // A preview link of the song from spotify
        // the name of the album the song is from
    //generate spotify data into a string
}

function watched(movie) {

    if (!movie) movie = defaultMovie;

    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&r=json&apikey=trilogy";
   
    request(queryUrl, function (err, res, body) {
        if (!err && res.statusCode === 200) {
            outputData = "Title: " + JSON.parse(body).Title + "\n";
            outputData += "Year:  " + JSON.parse(body).Year + "\n";
            outputData += "IMDB Rating:  " + JSON.parse(body).imdbRating + "\n";
            outputData += "Rotten Tomatoes Rating:  "  + JSON.parse(body).tomatoMeter  + "\n";
            outputData += "Country: " + JSON.parse(body).Country  + "\n";
            outputData += "Language:  " + JSON.parse(body).Language  + "\n";
            outputData += "Plot:  " + JSON.parse(body).Plot  + "\n";
            outputData += "Actors:  "+ JSON.parse(body).Actors  + "\n";
        } else {
            outputData = "Sorry there was an error with that request"
    