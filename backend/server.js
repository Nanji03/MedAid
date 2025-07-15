// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const flashcardRoutes = require('./routes/flashcardRoutes'); // We'll create this next

dotenv.config();
const app = express();
require('./scheduler/reminderCron');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/flashcards', require('./routes/flashcardRoutes'));
// backend/routes/flashcardRoutes.js
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/notes', require('./routes/noteRoutes'));
app.use('/api/studyplans', require('./routes/studyPlanRoutes'));
app.use('/api/shared', require('./routes/shareRoutes'));
app.use('/api/users', require('./routes/userRoutes'));




// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const connectDB = require('./config/db');
connectDB();
// backend/config/db.js
