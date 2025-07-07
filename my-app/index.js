import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import foodRoutes from './routes/foodRoutes.js';
import diaryRoutes from './routes/diaryRoutes.js';

app.use('/api/auth', authRoutes);   
app.use('/api', userRoutes);        
app.use('/api', foodRoutes);        
app.use('/api', diaryRoutes);     

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

