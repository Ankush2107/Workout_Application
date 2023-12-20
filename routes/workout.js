const express = require('express');
const router = express.Router();
const Workout = require('../models/WorkoutModel');

// Get all workouts
router.get('/', (req, res) => {
    res.json({ mesg: "Get all workouts" });
});

// Get a single workout
router.get('/:id', (req, res) => {
    res.json({ mesg: "Get a single workout" });
});

// Post a new workout
router.post('/', async (req, res) => {
    const {title, load, reps } = req.body; 
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    res.json({ mesg: "Post a new workout" });
});

// Delete a workout
router.delete('/:id', (req, res) => {
    res.json({ mesg: "Delete a workout" });
});

// Update a workout
router.patch('/:id', (req, res) => {
    res.json({ mesg: "Update a workout" });
});

module.exports = router; 