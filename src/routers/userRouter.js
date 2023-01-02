/* eslint-disable import/extensions */
import express from 'express';
import {
  getUsers,
  getUser,
  createUser
} from '../controllers/userController.js';

const router = express.Router();

router.route('/users').get(getUsers);
router.route('/users/:id').get(getUser);
router.route('/users').post(createUser);

export default router;
