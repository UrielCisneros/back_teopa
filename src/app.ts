import express, {Application} from "express";

const app: Application = express();

//Rutas
import teacherRoutes from './routers/Teacher';
import auth from './routers/Auth';
import workshop from './routers/Workshop';


//Settings
app.set('port', process.env.PORT);

//middleware
app.use(express.json());

const apiVersion = 'api-v1'

//Routes
app.use(`/${apiVersion}/teacher`,teacherRoutes);

app.use(`/${apiVersion}/signin`, auth);

app.use(`/${apiVersion}/workshop`, workshop);


export default app;