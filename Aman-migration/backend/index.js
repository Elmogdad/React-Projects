import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/uathRoutes.js'
import connectDB from './config/db.js';

const app = express();

// Connect to MongoDB
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('uploads'));

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);