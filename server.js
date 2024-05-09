import express from "express"
import bodyParser from "body-parser"
import cors from 'cors'
import("./db.js")
import userRouter from "./routes/userRouter.js"

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
const port = 5000||process.env.PORT

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.use('/user',userRouter);

app.listen(port,()=>{
    console.log(`The server is running port http:${port}`)
})