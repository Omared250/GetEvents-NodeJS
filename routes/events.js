/*
    Event Routes
    /api/events
*/

const { Router } = require('express');
const { getEvents } = require('../controller/getEvents');
const router = Router();

router.delete('/delete', getEvents );

module.exports = router;