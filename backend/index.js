import "dotenv/config"
import express from 'express'
import UserRoutes from './domains/users/routes.js'
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use("/users", UserRoutes);
const { PORT, MONGO_URL} = process.env;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})