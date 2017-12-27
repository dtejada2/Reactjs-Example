"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback){
        this.on('change', callback);
    },

    removeChangeListener: function(callback){
        this.removeChangeListener('change', callback);
    },

    emitChange: function(){
        this.emit('change');
    }
})