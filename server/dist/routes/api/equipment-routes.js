import express from 'express';
import { Equipment } from '../../models/index.js';
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
export { router as equipmentRouter };
