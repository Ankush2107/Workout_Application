const mongoose = require('mongoose');
const Workout = require('../models/WorkoutModel');

// get all workouts
const getWorkouts = async (req, res) => {
    const workout = await Workout.find().sort({ createdAt: -1 });
    res.status(200).json(workout);
}

// get a single workout
const singleWorkout = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such workout"});
    }

    const workout = await Workout.findById();
    
    if(!workout) {
        return res.status(404).json({ error: "No such workout" });
    };
    res.status(200).json(workout);
};

// create a new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body; 

    // add doc to db
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete workouts
const deleteWorkout = async (req, res) => {

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: "No such workout"});
    }

    const workout = await Workout.findByIdAndDelete({_id: id});

    if(!workout) {
        res.status(404).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
} 

// Update workouts
const updateWorkout = async (req, res) => {

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({error: "No such workout"});
    }

    const workout = await Workout.findByIdAndUpdate({_id: id}, { 
        ...req.body
    });

    if(!workout) {
        res.status(404).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
} 

module.exports = {
    createWorkout,
    getWorkouts,
    singleWorkout,
    deleteWorkout,
    updateWorkout
}