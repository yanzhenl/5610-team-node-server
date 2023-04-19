import mongoose from "mongoose";
import express from 'express';
import cors from "cors";
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import FollowsController from "./controllers/follows/follows-controller.js";
import SessionController from "./session-controller.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import session from "express-session";


dotenv.config();

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING_TEAM
mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(cors({
        credentials: true,
        origin: "http://localhost:3000", // change to your client port when deploy
    }
));
//app.use(express.json());

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(
    session({
        secret: "process.env.SECRET",
        resave: false,
        saveUninitialized: true, // added to avoid the deprecation warning.
        cookie: { secure: false}, // turn it on to true for https
    })
);

SessionController(app);
UsersController(app);
FollowsController(app);
HelloController(app);
app.listen(process.env.PORT || 8000);