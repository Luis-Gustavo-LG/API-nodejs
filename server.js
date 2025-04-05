import express from "express";
import cors from "cors"
import userRouter from "./Routes/users.routes.js"

const PORT = 3000;
const app = express();

app.use(cors())
app.use(express.json())

app.use("/users", userRouter)

app.listen(PORT, () => console.log(`Servidor ligado na porta: http://localhost:${PORT}`));