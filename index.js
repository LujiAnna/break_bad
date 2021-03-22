// Open a connection to API & Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://www.breakingbadapi.com/api/episodes', true)

// access data inside the onload function
request.onload = function() {
    // Begin accessing JSON data here
}

// Send request
request.send()