import "dotenv/config";
import mongoose from "mongoose";


const { MONGO_URL} = process.env;

export const connectDb = async () => {
    try {
    await mongoose.connect(MONGO_URL);
    console.log("Banco conectado")
} catch (error) {
    console.log("Erro ao conectar o banco", error)
}
}