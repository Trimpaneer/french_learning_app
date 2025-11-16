import pool from '../config/database.js';

export interface TutorialCompletion {
  id: number;
  user_id: number;
  tutorial_id: number;
  completed_at: Date;
}

export interface ExerciseCompletion {
  id: number;
  user_id: number;
  exercise_id: number;
  completed_at: Date;
}

export interface UserStats {
  tutorials_completed: number;
  exercises_completed: number;
}

// Tutorial completions
export const markTutorialComplete = async (userId: number, tutorialId: number): Promise<TutorialCompletion> => {
  const result = await pool.query(
    `INSERT INTO tutorial_completions (user_id, tutorial_id) 
     VALUES ($1, $2) 
     ON CONFLICT (user_id, tutorial_id) DO NOTHING
     RETURNING *`,
    [userId, tutorialId]
  );
  return result.rows[0];
};

export const isTutorialCompleted = async (userId: number, tutorialId: number): Promise<boolean> => {
  const result = await pool.query(
    'SELECT 1 FROM tutorial_completions WHERE user_id = $1 AND tutorial_id = $2',
    [userId, tutorialId]
  );
  return result.rows.length > 0;
};

// Exercise completions
export const markExerciseComplete = async (userId: number, exerciseId: number): Promise<ExerciseCompletion> => {
  const result = await pool.query(
    `INSERT INTO exercise_completions (user_id, exercise_id) 
     VALUES ($1, $2) 
     ON CONFLICT (user_id, exercise_id) DO NOTHING
     RETURNING *`,
    [userId, exerciseId]
  );
  return result.rows[0];
};

export const isExerciseCompleted = async (userId: number, exerciseId: number): Promise<boolean> => {
  const result = await pool.query(
    'SELECT 1 FROM exercise_completions WHERE user_id = $1 AND exercise_id = $2',
    [userId, exerciseId]
  );
  return result.rows.length > 0;
};

// Get user statistics
export const getUserStats = async (userId: number): Promise<UserStats> => {
  const tutorialResult = await pool.query(
    'SELECT COUNT(*) as count FROM tutorial_completions WHERE user_id = $1',
    [userId]
  );
  const exerciseResult = await pool.query(
    'SELECT COUNT(*) as count FROM exercise_completions WHERE user_id = $1',
    [userId]
  );

  return {
    tutorials_completed: parseInt(tutorialResult.rows[0].count),
    exercises_completed: parseInt(exerciseResult.rows[0].count),
  };
};

