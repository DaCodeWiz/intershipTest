/** @format */

const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:3000/Cluster0'; // Replace with your actual MongoDB URI

const connectDB = async () => {
	try {
		await mongoose.connect(MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDB connected');
	} catch (error) {
		console.error('MongoDB connection failed', error);
	}
};

module.exports = connectDB;
