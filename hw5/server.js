/**Christopher Legg
 ** CSCI 3800 WebAPI movie reviews
 **/

var usergrid = require('usergrid');
var express = require('express');
var bodyParser = require('body-parser');

var client = new usergrid.client({
    orgName: 'leggc',
    appName: 'sandbox'
});

var app = express();

app.use(bodyParser.json());

function checkMovie(movies){
    if ( !('title' in movies)) {
        console.log("Movie is missing a title");
        return false;
    }
    if ( !('year' in movies)) {
        console.log("Movie is missing a year");
        return false;
    }if ( !('stars' in movies)) {
        console.log("Movie is missing actors");
        return false;
    }
    if ( !(Array.isArray(movies.stars))) {
        console.log("Actors is not an array");
        return false;
    }
    if ( movies.stars.length < 1) {
        console.log("Movie has no included actors");
        return false;
    }
    return true;
}

// GETs
app.get('/gets', function(req, res){
    if (req.method === 'GET') if (Object.keys(req.query).length > 0) {
        res.send(req.query);
    } else {
        res.send('No headers or query parameters were sent in');
    }
});

// POST
app.post('/posts', function (req, res) {
    if (req.method === 'POST') if (Object.keys(req.query).length > 0) {
        // Store each of the fields from the request so that you cna
        var title = 	request_data.title;
        var year = 		request_data.year;
        var stars = 	request_data.stars;


        if(!title) {
            // Test to see if request had a title
            // If not print message to XML file
            context.setVariable("hasError", "true");
            context.setVariable("errorMessage", "Missing title in request. Please enter a title and retry.");
            errorState = true;

        } else if (!year)
        {
            // Missing the year message
            context.setVariable("hasError", "true");
            context.setVariable("errorMessage", "Missing year in request. Please enter a year and retry.");
            errorState = true;


        } else if(!stars)
        {
            // Missing Actor Data error Message
            context.setVariable("hasError", "true");
            context.setVariable("errorMessage", "Missing actors in request. Please enter a actor and retry.");
            errorState = true;

        } else
        {
            // Declare new object to replace the request with the cleaned data
            var tmp = {};

            // Set the different parameters in the object to make sure that it only has the 3 necessary fields
            tmp.title = title;
            tmp.year = year;
            tmp.stars = stars;

            // Overrite teh request with teh new content
            req.content = JSON.stringify(tmp);
        }
    } else {
        res.send('No headers or query parameters were sent in');
    }
});

// DELETE
app.delete('/deletes', function (req, res) {
    if (req.method === 'DELETE') if (Object.keys(req.query).length > 0) {
        res.send(req.query);
    } else {
        res.send('No headers or query parameters were sent in');
    }
});

// requests made to the base URL rejected
app.all('/', function (req, res) {
    res.status(403).send('No URN specified');
});

// invalid request response
app.use('*', function(req, res, next) {
    var err = new Error();
    err.status = 404;
    err.message = "Given HTTP method not accepted";
    next(err);
});

// handling 404 errors
app.use(function(err, req, res, next) {
    if(err.status !== 404) {
        return next();
    }

    res.send(err.message || '** nope **');
});

app.listen(3001);
console.log("server running on http://localhost:3001/");