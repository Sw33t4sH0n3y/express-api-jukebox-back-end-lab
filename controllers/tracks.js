const Track = require('../models/track');

// Create track
const create =async (req,res) => {
    try {
        const track = await Track.create(req.body);
        res.status(201).json(track);
    } catch (error) {
        res.status(500).json({error: error.message });
    }
};

// List Tracks

const index = async (req, res) => {
    try {
        const tracks = await Track.find({});
        res.status(200).json(tracks);
    } catch (error) {
        res.status(500).json({error: error.message });
    }
};

// GET single track

const show = async (req, res) => {
    try {
        const track =await Track.findById (req.params.id);
        if (!track) {
            return res.status(404).json({error: 'Track not found' });
        }
        res.status(200).json(track);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE a track

const revise = async (req, res) => {
    try {
        const track = await Track.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!track) {
            return res.status(404).json({ error: 'Track not found' });
        }
        res.status(200).json(track);
    } catch (error) {
        res.statu(500).json({ error: error.message });
    }
};

// DELETE track

const deleteTrack = async (req, res) => {
    try {
        const track = await Track.findByIdAndDelete(req.params.id);
        if (!track) {
            return res.status(404).json({error: 'Track not found' });
        }
        res.status(200).json(track);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    create,
    index,
    show,
    revise,
    delete: deleteTrack
};