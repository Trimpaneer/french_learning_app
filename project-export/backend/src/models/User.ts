import pool from '../config/database.js';

export interface User {
  id: number;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface UserWithoutPassword {
  id: number;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export const createUser = async (email: string, hashedPassword: string): Promise<UserWithoutPassword> => {
  const result = await pool.query(
    'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email, created_at, updated_at',
    [email, hashedPassword]
  );
  return result.rows[0];
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0] || null;
};

export const findUserById = async (id: number): Promise<UserWithoutPassword | null> => {
  const result = await pool.query(
    'SELECT id, email, created_at, updated_at FROM users WHERE id = $1',
    [id]
  );
  return result.rows[0] || null;
};

