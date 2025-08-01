import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
import userRoutes from './routes/user';
import timetableRoutes from './routes/timetable';
import assignmentRoutes from './routes/assignment';
import announcementRoutes from './routes/announcement';
import doubtRoutes from './routes/doubt';
import lostFoundRoutes from './routes/lostfound';
import peerConnectRoutes from './routes/peerconnect';
import chatRoutes from './routes/chat';

app.use('/api/user', userRoutes);
app.use('/api/timetable', timetableRoutes);
app.use('/api/assignment', assignmentRoutes);
app.use('/api/announcement', announcementRoutes);
app.use('/api/doubt', doubtRoutes);
app.use('/api/lostfound', lostFoundRoutes);
app.use('/api/peerconnect', peerConnectRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI!, {}).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});