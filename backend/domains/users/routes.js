import { Router } from "express"
import { connectDb } from "../../config/db.js";
import User from './model.js';
import bcrypt from 'bcryptjs'

const bcryptSalt = bcrypt.genSaltSync()
const router = Router()

router.get('/', async (req, res) => {
    connectDb()

    try {
        const userDoc = await User.find();

        res.json(userDoc);

    } catch {
        res.status(500).json();
    }
});

router.post('/', async (req, res) => {
    connectDb();

    const { name, email, password } = req.body;
    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt)

    try {
        const newUserDoc = await User.create({
            name,
            email,
            password: encryptedPassword,
        })

        res.json(newUserDoc)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router;