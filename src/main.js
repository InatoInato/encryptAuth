import express from "express";
import sequelize from "./config/db.js";
import router from './routes/userRoutes.js'
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use('/auth', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    try{
        await sequelize.sync();
        console.log(`Started in port: ${PORT}`);
    }
    catch(err){
        console.error("Server error", err)
    }
})