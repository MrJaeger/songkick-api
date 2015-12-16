'use strict';
/*
    Examples of API calls which returns events
*/
var Songkick = require('songkick-api');
var client = new Songkick('TEST API KEY');

/*
    searchEvents examples
*/

/*
    Search based on an artist's name
*/
client
    .searchEvents({
        'artist_name': 'Muse'
    })
    .then(function(events) {
        console.log(events);
    });

/*
    Search based on a songkick metro area id
*/
client
    .searchEvents({
        'location': 'sk:24580'
    })
    .then(function(events) {
        console.log(events);
    });

/*
    Search involving pagination
*/
client
    .searchEvents({
        'artist_name': 'Muse',
        'page': 2,
        'per_page': 20
    })
    .then(function(events) {
        console.log(events);
    });

/*
    Search involving filtering based on date
*/
client
    .searchEvents({
        'artist_name': 'Muse',
        'min_date': '2015-12-31',
        'max_date': '2016-12-31'
    })
    .then(function(events) {
        console.log(events);
    });

