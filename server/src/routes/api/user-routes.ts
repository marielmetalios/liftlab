import express from 'express';
import { Request, Response } from 'express';
import { User } from '../../models/index.js';

const router = express.Router();


router.get('/', async (_req: Request, res: Response) => {
  try {
    const user = await User.findAll();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'Tip not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/', async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


export { router as userRouter };
