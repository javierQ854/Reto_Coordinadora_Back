import express from 'express'
import 'dotenv/config'
import cors from "cors";
import helmet from "helmet";
import {router} from "./presentation/routes";


const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors()); 
app.use(helmet());

app.use('/api',router)

app.listen(PORT,()=>{
    console.log('serve en funcionamiento',PORT)
})