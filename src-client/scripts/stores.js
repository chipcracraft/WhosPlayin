const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');

const STORE = {
    _data : {
      currentViewSetting: '',
      currentSongs: []
    },

    setStore: function(storeProp, payload){


    this._data[storeProp] = payload
    BackBone.Events.trigger('storeChange')
    },

    getStoreData: function(){
       return this._data
    },

    onChange: function(changeStore){
        Backbone.Events.on('storeChange', someFunc)

    }
}

module.exports = STORE
