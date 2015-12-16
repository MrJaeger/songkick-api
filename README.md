# songkick-api
A small javascript library (for NodeJS) to interface with the SongKick API

## Installation

You can use [npm](https://npmjs.org) to install this module:

    npm install songkick-api

If you prefer to use the source form github, clone the repo:

    git clone https://github.com/MrJaeger/songkick-api.git

## Usage

Instantiate a client to make API calls with

    var Songkick = require('songkick-api');
    var client = new Songkick('<YOUR API KEY GOES HERE>');

You can then make calls to endpoints and create promise chains to do whatever you'd like!

    client
        .searchEvents({
            'artist_name': 'Muse',
            'min_date': '2015-12-31',
            'max_date': '2016-12-31',
            'page': 2
        })
        .then(function(events) {
            console.log(events);
        })
        .catch(function(error) {
            console.log(error);
        })
