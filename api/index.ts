import express, { Router } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from '../server/src/routes/auth';
import completionRoutes from '../server/src/routes/completions';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
const allowedOrigins = [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
    'http://localhost:3000',
];

// Add Vercel domain if in production
if (process.env.VERCEL_URL) {
    allowedOrigins.push(`https://${process.env.VERCEL_URL}`);
}

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
            } else if (origin.includes('vercel.app')) {
                // Allow all Vercel preview deployments
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
app.use('/api/auth', authRoutes as any);
app.use('/api/completions', completionRoutes as any);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Root endpoint
app.get('/api', (req, res) => {
    res.json({
        message: 'French Learning App API',
        version: '1.0.0',
        endpoints: {
            health: '/api/health',
            auth: {
                register: 'POST /api/auth/register',
                login: 'POST /api/auth/login',
                me: 'GET /api/auth/me'
            },
            completions: {
                tutorialComplete: 'POST /api/completions/tutorials/:tutorialId/complete',
                exerciseComplete: 'POST /api/completions/exercises/:exerciseId/complete',
                tutorialStatus: 'GET /api/completions/tutorials/:tutorialId/status',
                exerciseStatus: 'GET /api/completions/exercises/:exerciseId/status',
                stats: 'GET /api/completions/stats'
            }
        }
    });
});

// Export for Vercel serverless
export default app;
