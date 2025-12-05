import express from 'express';
import { authenticateToken, AuthRequest } from '../middleware/auth.js';
import {
  markTutorialComplete,
  markExerciseComplete,
  isTutorialCompleted,
  isExerciseCompleted,
  getUserStats,
} from '../models/Completion.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Mark tutorial as complete
router.post(
  '/tutorials/:tutorialId/complete',
  authenticateToken,
  async (req: AuthRequest, res) => {
    try {
      const userId = req.userId!;
      const tutorialId = parseInt(req.params.tutorialId);

      if (isNaN(tutorialId)) {
        return res.status(400).json({ error: 'Invalid tutorial ID' });
      }

      const completion = await markTutorialComplete(userId, tutorialId);
      const stats = await getUserStats(userId);

      res.json({
        message: 'Tutorial marked as complete',
        completion,
        stats,
      });
    } catch (error) {
      console.error('Error marking tutorial complete:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

// Mark exercise as complete
router.post(
  '/exercises/:exerciseId/complete',
  authenticateToken,
  async (req: AuthRequest, res) => {
    try {
      const userId = req.userId!;
      const exerciseId = parseInt(req.params.exerciseId);

      if (isNaN(exerciseId)) {
        return res.status(400).json({ error: 'Invalid exercise ID' });
      }

      const completion = await markExerciseComplete(userId, exerciseId);
      const stats = await getUserStats(userId);

      res.json({
        message: 'Exercise marked as complete',
        completion,
        stats,
      });
    } catch (error) {
      console.error('Error marking exercise complete:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

// Check if tutorial is completed
router.get(
  '/tutorials/:tutorialId/status',
  authenticateToken,
  async (req: AuthRequest, res) => {
    try {
      const userId = req.userId!;
      const tutorialId = parseInt(req.params.tutorialId);

      if (isNaN(tutorialId)) {
        return res.status(400).json({ error: 'Invalid tutorial ID' });
      }

      const completed = await isTutorialCompleted(userId, tutorialId);

      res.json({ completed });
    } catch (error) {
      console.error('Error checking tutorial status:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

// Check if exercise is completed
router.get(
  '/exercises/:exerciseId/status',
  authenticateToken,
  async (req: AuthRequest, res) => {
    try {
      const userId = req.userId!;
      const exerciseId = parseInt(req.params.exerciseId);

      if (isNaN(exerciseId)) {
        return res.status(400).json({ error: 'Invalid exercise ID' });
      }

      const completed = await isExerciseCompleted(userId, exerciseId);

      res.json({ completed });
    } catch (error) {
      console.error('Error checking exercise status:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

// Get user statistics
router.get('/stats', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.userId!;
    const stats = await getUserStats(userId);

    res.json({ stats });
  } catch (error) {
    console.error('Error getting user stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

