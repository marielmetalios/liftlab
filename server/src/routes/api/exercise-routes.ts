import express from 'express';
import type { Request, Response} from 'express';
import { Exercises } from '../../models/index.js';

const router = express.Router();


router.get('/', async (_req: Request, res: Response) => {
  try {
    const exercise = await Exercises.findAll();
    console.log("Success")
    res.status(200).json(exercise);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/:id', async (req: Request, res: Response) => {
  try {
    const exercise = await Exercises.findByPk(req.params.id);
    if (exercise) {
      res.status(200).json(exercise);
    } else {
      res.status(404).json({ error: 'Feedback not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/', async (req: Request, res: Response) => {
  try {
    const newExercise = await Exercises.create(req.body);
    res.status(201).json(newExercise);
    console.log(`Success`)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


export { router as exerciseRouter };
