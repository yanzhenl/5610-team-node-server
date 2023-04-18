import mongoose from "mongoose";
import express from 'express';
import cors from "cors";
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import FollowsController from "./controllers/follows/follows-controller.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING_TEAM
mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(cors());
//app.use(express.json());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

UsersController(app);
FollowsController(app);
HelloController(app);
app.listen(process.env.PORT || 8000);