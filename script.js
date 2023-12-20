require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout');
// express app
const app = express();

const PORT = process.env.PORT | 4000

// middleware
app.use(express.json()); 

// connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // Listen for request
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:4000`);
    })
})
.catch((err) => {
    console.log(err);
})

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Route
app.use('/api/workout', workoutRoutes);