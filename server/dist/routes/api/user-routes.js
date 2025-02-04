import express from 'express';
import { User, Exercises } from '../../models/index.js';
import Sequelize from '../../config/connection.js';
const router = express.Router();
router.get('/', async (_req, res) => {
    try {
        const users = await User.findAll({
            attributes: [
                'id',
                [Sequelize.col('exercise_id'), 'exerciseId'], // Explicitly rename exercise_id to exerciseId
                'isFavorite',
                'username'
            ],
            raw: true, // Return raw data to control field names
        });
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ error: 'Tip not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.post('/favorite-workout', async (req, res) => {
    console.log(req.body); // Log the body of the request
    const { username, exercise_id, isFavorite } = req.body;
    try {
        // Check if the user exists, if not, create the user
        let user = await User.findOne({ where: { username } });
        if (!user) {
            // If exercise_id is provided, associate it, otherwise, don't assign it to the new user
            if (!exercise_id) {
                return res.status(400).json({ message: 'Exercise ID is required' });
            }
            // Create a new user if not found
            user = await User.create({
                username,
                exercise_id, // Ensure exercise_id is passed correctly
                isFavorite: false, // Default favorite status
            });
        }
        // Check if the exercise exists
        const workout = await Exercises.findByPk(exercise_id);
        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }
        // Check if the user has already marked this exercise as a favorite
        const existingFavorite = await User.findOne({
            where: { username, exercise_id },
        });
        if (existingFavorite) {
            // If the favorite already exists, update it
            existingFavorite.isFavorite = isFavorite;
            await existingFavorite.save();
            return res.status(200).json({ message: 'Favorite status updated successfully' });
        }
        else {
            // If no existing favorite, create a new favorite record
            await User.create({
                username,
                exercise_id, // Link exercise_id with the user
                isFavorite,
            });
            return res.status(201).json({ message: 'Favorite added successfully' });
        }
    }
    catch (error) {
        console.error('Error in /favorite-workout route:', error);
        return res.status(500).json({ message: 'An error occurred' });
    }
});
export { router as userRouter };
