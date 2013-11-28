# MEAN Typeahead
A demo project for fast typeaheads. Based on the [MEAN][mean] stack and capable of quickly filtering through thousands of records without a noticeable delay.

If you're not familiar with the MEAN stack, [here][meanyt] is a nice video overview.

## Why?
Typeaheads are becoming more commonplace on the web and in applications. They can be a huge productivity boost in certain situations. The Google search site is a perfect example. It may be easy to implement a typeahead on the client, but what happens when you need to filter over thousands of records? For satisfactory performance, the full stack needs to be addressed.

### Why Mongodb?
Simplicity. No schema. Fast. Indexed fields supported by anchored regex. By that, I mean that mongodb can use indexes when queried with an anchored regular expression like `/^aar/`. This aligns perfectly with our requirement to incrementally search as each character is typed by the user.

### Why Angularjs?
Angularjs allows for clear and concise code to accomplish this. Uses the [angular-bootstrap][ab] module to _really_ make this concise.

## The Setup
This project was initially generated by [Yeoman][yo]. For the curious:

* yo version __1.0.4__
* generator-angular version __0.6.0-rc.2__

After generating the project, I removed a few things but otherwise leveraged as much as possible.

Since this is a node.js project, you'll need node.js installed on your development machine. Those instructions can be found [here][node]. If you haven't done it already, install the following tools:

    npm install -g bower
    npm install -g grunt-cli

## Project Installation
From the root directory:

    npm install
    bower install

## The Database
You'll need a development mongodb database to play with. We won't cover that here, but you'll likely need to change the server/mongodb.js file to match your configuration.

## Running the Server

    cd server
    node server.js

You should see some logging output telling you the status of the database connection.

## Running the Client (development mode)

    grunt server

You should see the development server start on port 9000. Depending on your configuration, your browser may be launched to open the start page.

## Running the Client (from the node.js server)

    grunt build

The node.js server serves the build files and the site becomes available on http://localhost:3000 by default. In this configuration, both the site and the API are served from the same origin.

## Then What?
If your browser isn't already launched, navigate to http://localhost:9000 (or port 3000 - see above). You'll see a basic layout with the following fields:

* __Database Record Count__. This tells you how many widgets are currently in the database.
* __The Typeahead Control__. The magic happens here.
* __The "Add More Data" Button__. Populates the database with more random data.

The widgets have numbers for names - this just makes it easier to randomly create them. Imagine searching for serial numbers or something like that.

## Todo

* Timing measurements on UI
* Configurable query limits and dropdown list sizes
* PRs ???

## License
[MIT][mit] license. Copyright 2013 by Aaron Nielsen.

[mean]: http://blog.mongodb.org/post/49262866911/the-mean-stack-mongodb-expressjs-angularjs-and
[meanyt]: http://www.youtube.com/watch?v=1Sy3vWJ1N2U
[ab]: https://github.com/angular-ui/bootstrap
[yo]: http://yeoman.io/
[node]: http://nodejs.org/
[mit]: http://opensource.org/licenses/MIT