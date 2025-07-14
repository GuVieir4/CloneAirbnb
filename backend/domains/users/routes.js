import { Router } from "express"
import { connectDb } from "../../config/db.js";
import User from './model.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import "dotenv/config"
import cookieParser from "cookie-parser";

const bcryptSalt = bcrypt.genSaltSync()
const router = Router()
const {JWT_SECRET_KEY} = process.env

router.get('/', async (req, res) => {
    connectDb()

    try {
        const userDoc = await User.find();

        res.json(userDoc);

    } catch {
        res.status(500).json();
    }
});

router.get('/profile', async (req, res) => {
    const { token } = req.cookies;

    if (!token) return res.json(null);

    try {
        const userInfo = jwt.verify(token, JWT_SECRET_KEY);
        res.json(userInfo);
    } catch (error) {
        res.status(401).json(null);
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

        const { _id } = newUserDoc;
        const newUserObj = { name, email, _id };

        jwt.sign(newUserObj, JWT_SECRET_KEY, {}, (error, token) => {
            if (error) throw error;

            res.cookie("token", token).json(newUserObj)   
        })

    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/login', async (req, res) => {
    connectDb();

    const { email, password } = req.body;

    try {
        const userDoc = await User.findOne({ email })

        if (userDoc) {

            const passwordCorrect = bcrypt.compareSync(password, userDoc.password);

            const { name, _id } = userDoc

            if (passwordCorrect) {
                const newUserObj = { name, _id, email }
                const token = jwt.sign(newUserObj, JWT_SECRET_KEY)
                res.cookie("token", token).json(newUserObj);
            } else {
                res.status(400).json("Senha inválida")
            }

        } else {
            res.status(400).json("Usuário não encontrado")
        }

    } catch (error) {
        res.status(500).json(error)
        throw error;
    }
})

router.post("/logout", async (req, res) => {
    res.clearCookie("token").json("Deslogado")
    location.reload();
})

export default router;