/**
 * @Author: Yu Xu <yu.xu@sjsu.edu>
 * 
 * This file contains Db storage and management logic for all indents.
 */

'use strict';
var mysql = require('mysql'),
  textHelper = require('textHelper');

var connection = mysql.createConnection({
  host: 'xxxxxxxxxxxxxxxx.us-west-2.rds.amazonaws.com',
  user: 'xxxxxxxx',
  password: 'xxxxxxxxxx',
  database: 'xxxxxxxxxxx',
  debug: true
});

var storage = (function () {

  function Nutrition(session, data) {
    if (data) {
      this.data = data;
    } else {
      this.data = {
        'food': null,
        'count': null,
        'unit': null
      };
    }
    this._session = session;
  }

  Nutrition.prototype = {
    /**
     * Store a food into Db
     */
    save: function (response) {
      var query = 'REPLACE INTO foods(id, day, foodname, count, unit, created_at)' +
        'VALUES (' + connection.escape(this._session.user.userId) + ', NOW(), ' +
        connection.escape(this.data.food) + ', ' + connection.escape(this.data.count) + ', ' +
        connection.escape(this.data.unit) + ', NOW())';

      connection.query(query, (function (data) {
        return function (err, rows) {
          if (err) {
            console.log(err);
            return;
          }

          var speechOutput = '';
          if (data.count != 0) {
            speechOutput = data.count + ' ' + data.unit + ' ' + data.food;
          } else {
            speechOutput = 'nothing';
          }
          speechOutput += ' added to your nutrition.';
          response.tell(speechOutput);
        };
      })(this.data));
    }
  };

  return {
    /**
     * Validates input for save food action and calls Save method on success
     */
    saveFood: function (session, data, response) {
      
      var currentFood = new Nutrition(session, data);
        currentFood.save(response);
     
    },
  };

})();
module.exports = storage;