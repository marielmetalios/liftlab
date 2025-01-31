import { userRouter } from './user-routes.js';
import { exerciseRouter } from './exercise-routes.js';
import { equipmentRouter } from './equipment-routes.js';
import express from 'express';
const router = express.Router();

router.use('/users', userRouter);
router.use('/exercises', exerciseRouter);
router.use('/equipment', equipmentRouter);

export default router;
