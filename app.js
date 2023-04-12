import mongoose from "mongoose";
import express from 'express';
import cors from "cors";
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
// mongoose.connect(CONNECTION_STRING);

mongoose.connect('mongodb://127.0.0.1:27017/Farmer');

const app = express();
app.use(cors());
app.use(express.json());

UsersController(app);
HelloController(app);
app.listen(process.env.PORT || 8000);