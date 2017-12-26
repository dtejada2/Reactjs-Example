"use strisct"

var React = require('react');
var Link = require('react-router').Link;

var pageNotFound = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Page Not Fount</h1>
                <p>Woops! sorry, there is nothing to see here.</p>
                <p><Link to="app">Back to Home</Link></p>
            </div>
        );
    }
});

module.exports = pageNotFound;