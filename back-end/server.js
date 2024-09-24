// Import required modules
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // to load environment variables

// Initialize express app
const app = express();
const PORT = 3000; // you can change the port number as needed

// MongoDB connection string
const mongoURI = `mongodb+srv://minecraft5ic26:${process.env.DB_PASSWORD}@animefigures.2kjxv.mongodb.net/?retryWrites=true&w=majority&appName=AnimeFigures`;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Successfully connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Basic route to test server
app.get('/', (req, res) => {
  res.send('MongoDB is connected!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
