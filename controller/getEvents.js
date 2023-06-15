const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async( req, res = response ) => {

    const events = await Event.find().populate('user', 'name');
    
    res.json({ events })

};

module.exports = {
    getEvents,
}