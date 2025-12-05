import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDatabase } from './config/database.js';
import authRoutes from './routes/auth.js';
import completionRoutes from './routes/completions.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:5173',
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5175',
  'http://localhost:3000',
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      // In development, allow any localhost origin
      if (origin.includes('localhost') || origin.includes('127.0.0.1')) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  },
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/completions', completionRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Initialize database and start server
const startServer = async () => {
  try {
    await initDatabase();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

export default app;

if (process.env.NODE_ENV !== 'production') {
  startServer();
} else {
  // In production (Vercel), we might not want to start the server explicitly 
  // if we are just exporting the app for serverless, BUT
  // if this is run as a standalone node app in production, we DO want it.
  // For Vercel Serverless, the entry point will be api/index.ts importing this.
  // So we can leave startServer() here? 
  // Actually, Vercel imports the file. If we run startServer(), it might try to listen on a port.
  // Better to check if we are being required or run directly.
  // But ES modules make that hard.
  // Let's just export app and keep startServer() for now, 
  // assuming Vercel won't run this file directly but import it?
  // Wait, if I import it in api/index.ts, the side effects (startServer) will run.
  // I should wrap startServer.
}

// Only start server if not running in Vercel (Vercel sets VERCEL=1)
if (!process.env.VERCEL) {
  startServer();
}

