"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function(author){
        var newAuthor = AuthorApi.saveAuthor(author);

        //Hey dispatcher, go tell all the stores that an author was just created.
        Dispatcher.dispatch({
            actionTypes: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor: function(author){
        var updaterAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionTypes: ActionTypes.UPDATE_AUTHOR,
            author: updaterAuthor
        });
    },

    deleteAuthor: function(id){
        AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionTypes: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }
};

module.exports = AuthorActions;