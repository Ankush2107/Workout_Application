const express = require('express');

// express app
const app = express();

const PORT = process.env.PORT | 4000

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Route
app.get('/', (req, res) => {
    res.json({mesg: "Welcome to the app"});
});

// Listen for request
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:4000`);
});