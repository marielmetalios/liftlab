import express from 'express';
import { Equipment, Exercises } from '../../models/index.js';
const router = express.Router();
router.get('/', async (_req, res) => {
    try {
        const Equips = await Equipment.findAll();
        res.status(200).json(Equips);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.post('/', async (req, res) => {
    try {
        // Log the incoming data for debugging
        console.log('Received equipment data:', req.body);
        // Destructure the data from the request body
        const { exerciseId, equipment } = req.body;
        if (!exerciseId || !equipment) {
            return res.status(400).json({ error: 'Exercise ID and equipment are required' });
        }
        const exercise = await Exercises.findByPk(exerciseId);
        if (!exercise) {
            return res.status(404).json({ error: 'Exercise not found' });
        }
        const newEquipment = await Equipment.create({
            exercise_id: exerciseId,
            equipment,
        });
        return res.status(201).json(newEquipment);
    }
    catch (error) {
        console.error('Error creating equipment:', error);
        return res.status(500).json({ error: 'Failed to create equipment' });
    }
});
export { router as equipmentRouter };
