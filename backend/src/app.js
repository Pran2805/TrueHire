import express from 'express'
import cors from 'cors'
import dotenv from'dotenv'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'

dotenv.config({})

const app = express()

app.use(cors({
    origin: true,
    credentials: true
    
}))
app.use(express.json())
app.use(cookieParser())
app.use(helmet())


import router from './routes/index.js'
app.use("/api/v1",router)

app.use((req, res) =>{
    res.send("Invalid Path")
})



export default app;