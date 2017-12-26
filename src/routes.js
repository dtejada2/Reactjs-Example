"use strict"

var React = require("react");

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
// var pageNotFound = Router.pageNotFound;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/App')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="authors" handler={require('./components/author/authorPage')} />
        <Route name="addAuthor" path="author" handler={require('./components/author/manageAuthorPage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
        {/* <pageNotFound handler={require('./components/pageNotFound')} /> */}
        <Redirect from="about-us" to="about"/>
    </Route>
);

module.exports = routes;