import "dotenv/config"
import express from 'express'
import UserRoutes from './domains/users/routes.js'

const app = express()
app.use(express.json());
app.use("/users", UserRoutes);
const { PORT, MONGO_URL} = process.env;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})