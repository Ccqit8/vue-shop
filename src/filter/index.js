import date from './dateFilter.js';
import json from './getJson.js';
// import Vue from 'vue';
export default {
    install(vue){
        vue.filter('date',date);
        vue.filter('json',json);
    }
}