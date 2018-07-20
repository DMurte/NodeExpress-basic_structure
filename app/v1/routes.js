require('express-group-routes');
const express = require('express');
const router = express.Router();


router.group('/test', (router) => {
    router.get("/", (req, res) => res.send('Ok'));
    
});



module.exports = router;
