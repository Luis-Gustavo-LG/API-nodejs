import express from "express";
import cors from "cors"
import userRouter from "./Routes/users.routes.js"
import sequelize from "./Config/database.js";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
});