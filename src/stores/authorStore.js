"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
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
    switch(action.actionTypes) {
        case ActionTypes.INITIALIZE:
            _author =  action.initialData.authors;
            AuthorStore.emitChange();
            break;
        case ActionTypes.CREATE_AUTHOR:
            _author.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            var existingAuthor = _.find(_author, {id: action.author.id});
            var existingAuthorIndex = _.indexOf(_author, existingAuthor);
            _author.splice(existingAuthorIndex, 1, action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.DELETE_AUTHOR:
            _.remove(_author, function(author){
                return action.id === author.id;
            });
            AuthorStore.emitChange();
            break;
            default:
            //no option
    }
});

module.exports = AuthorStore;