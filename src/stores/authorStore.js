"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('object-assign');
var CHANGE_EVENT = 'change';

var _author = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
        this.removeChangeListener(CHANGE_EVENT, callback);
    },

    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    getAllAuthor: function(){
        return _author;
    },
    getAuthorById: function(id){
        return _.find(_author, {id: id});
    }
});

Dispatcher.register(function(action){
    switch(action.ActionType) {
        case ActionTypes.CREATE_AUTHOR:
            _author.push(action.author);
            AuthorStore.emitChange();
            break;
    }
});

module.exports = AuthorStore;