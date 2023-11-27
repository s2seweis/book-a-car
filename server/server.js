const express = require('express');
const cors = require('cors'); // Add this line
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require('./db');
const path = require('path');

app.use(cors()); // Add this line to enable CORS
app.use(express.json());

app.use('/api/cars/', require('./routes/carsRoute'));
app.use('/api/users/', require('./routes/usersRoute'));
app.use('/api/bookings/', require('./routes/bookingsRoute'));

// app.get('/', (req, res) => res.send('Hello World'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`));
