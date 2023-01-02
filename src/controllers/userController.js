/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import {
  getAllUsers,
  getUserById,
  create,
  update,
  deleteUserById
} from '../models/userModel.js';

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({
      status: 'Success.',
      data: { users }
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await getUserById(req.params);
    res.status(200).json({
      status: 'Success.',
      data: { user }
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await create(req.body);
    res.status(201).json({
      status: 'Success.',
      data: { user }
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await update(req.params);
    res.status(201).json({
      status: 'Success.',
      data: { user }
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await deleteUserById(req.params);
    res.status(201).json({
      status: 'Success.',
      data: { user }
    });
  } catch (err) {
    throw new Error(err);
  }
};
