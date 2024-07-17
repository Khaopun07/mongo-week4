const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// ConnectDB
const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri, {
    appName: 'Cluster0'
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const mySchema = new mongoose.Schema({
    product_name: { type: String, required: true }, 
    product_type: { type: String, required: true }, 
    price: { type: Number, required: true }, 
    unit: { type: String, required: true },
});
module.exports = mongoose.model('Product', mySchema);


// Define Route
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
