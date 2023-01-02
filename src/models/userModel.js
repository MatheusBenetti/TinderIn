/* eslint-disable import/prefer-default-export */
import bcrypt from 'bcryptjs';
// eslint-disable-next-line import/extensions
import { database } from '../utils/database.js';

export const getAllUsers = async () => {
  const [rows] = await database.query('SELECT * FROM users');
  return rows;
};

export const getUserById = async (id) => {
  const [rows] = await database.query('SELECT * FROM users WHERE id = ?', [id]);

  if (rows.length === 0) {
    throw new Error('User not found!');
  }

  return rows[0];
};

export const create = async (name, email, password) => {
  const hashedPassword = bcrypt.hash(password, 12);

  const user = await database.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, hashedPassword]
  );
  return user;
};

export const update = async (id, name, email, password) => {
  let hashedPassword;

  if (password) {
    hashedPassword = await bcrypt.hash(password, 12);
  }

  const [user] = await database.query(
    'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
    [id, name, email, hashedPassword]
  );
  return user;
};

export const deleteUserById = async (id) => {
  const [user] = await database.query('DELETE FROM users WHERE id = ?', [id]);
  return user;
};
