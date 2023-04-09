import express from 'express';
import cors from "cors";
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./users/users-controller.js";


const app = express();
app.use(cors());
app.use(express.json());

UsersController(app);
HelloController(app);
app.listen(8000);