import pg from 'pg';

const { Pool } = pg;

// Vercel Postgres connection
// Uses environment variables automatically provided by Vercel
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Test connection
pool.on('connect', () => {
  console.log('✅ Connected to Vercel Postgres database');
});

pool.on('error', (err) => {
  console.error('❌ Unexpected error on idle client', err);
});

// Initialize database schema
export const initDatabase = async () => {
  try {
    const client = await pool.connect();
    
    // Create users table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create index on email for faster lookups
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)
    `);

    // Create tutorial_completions table
    await client.query(`
      CREATE TABLE IF NOT EXISTS tutorial_completions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        tutorial_id INTEGER NOT NULL,
        completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, tutorial_id)
      )
    `);

    // Create exercise_completions table
    await client.query(`
      CREATE TABLE IF NOT EXISTS exercise_completions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        exercise_id INTEGER NOT NULL,
        completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, exercise_id)
      )
    `);

    // Create indexes for faster lookups
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_tutorial_completions_user ON tutorial_completions(user_id)
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_exercise_completions_user ON exercise_completions(user_id)
    `);

    console.log('✅ Database schema initialized');
    client.release();
  } catch (error) {
    console.error('❌ Error initializing database:', error);
    throw error;
  }
};

export default pool;
