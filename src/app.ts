import express, {Application} from "express";

const app: Application = express();

import teacherRoutes from './routers/Teacher';


//Settings
app.set('port', process.env.PORT);

//middleware
app.use(express.json());

const apiVersion = 'api-v1'

//Routes
app.use(`/${apiVersion}/teacher`,teacherRoutes);


export default app;