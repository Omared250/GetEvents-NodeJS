const { response } = require('express');
const Event = require('../models/Event');
const logger = require('../winston-config');
const { log } = require('winston');

const getEvents = async( req, res = response ) => {

    try {

        const events = await Event.find().populate('user', 'name');
        res.json({ events })

        logger.info('Events retrived them successfully', { events })
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Unable to get events',
        })
        logger.error({
            message: err.message,
            stack: err.stack,
        });
    }


};

module.exports = {
    getEvents,
}