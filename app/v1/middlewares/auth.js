const async = require('es5-async-await/async');
const await = require('es5-async-await/await');
const moment = require('moment');


    const auth = {

        global:  async((req, res, next)  => {
            const auth = req.headers['authorization'];

            next();
            return;
        })
      
      }
      
      
module.exports = auth;



