import express from 'express';
import { Exercises } from '../../models/index.js';
const router = express.Router();
router.get('/', async (_req, res) => {
    try {
        const exercise = await Exercises.findAll();
        console.log("Success");
        res.status(200).json(exercise);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// new route for specfic muscle groups:
router.get('/:muscleGroup', async (_req, res) => {
    try {
        const { muscleGroup } = _req.params;
        const exercises = await Exercises.findAll({
            where: {
                muscleGroup: muscleGroup
            }
        });
        console.log(`Successfully filtered on ${muscleGroup}`);
        res.status(200).json(exercises);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
// end new route
router.get('/:id', async (req, res) => {
    try {
        const exercise = await Exercises.findByPk(req.params.id);
        if (exercise) {
            res.status(200).json(exercise);
        }
        else {
            res.status(404).json({ error: 'Feedback not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// POST route for creating a new exercise
router.post('/', async (req, res) => {
    try {
        const { muscleGroup, name, repSets } = req.body;
        if (!repSets || !repSets.includes('x')) {
            return res.status(400).json({ error: 'Invalid reps x sets format. Expected format: "4x5"' });
        }
        const newExercise = await Exercises.create({
            muscleGroup,
            name,
            repSets,
        });
        return res.status(201).json(newExercise);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
export { router as exerciseRouter };
