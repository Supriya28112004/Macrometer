import express from 'express';
import { searchFoods } from '../controllers/foodController.js';

const router = express.Router();

router.get('/foods', searchFoods);

export default router;

