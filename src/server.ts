import express, {Application} from 'express'
import cors from 'cors'
import helmet from "helmet";


import authRouter from './routes/auth'


const app = express()
const PORT = process.env.PORT || 3000;

app.set("trust proxy", 1);
app.use(cors());
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));


app.use("/api/v1/auth.ts", authRouter);
