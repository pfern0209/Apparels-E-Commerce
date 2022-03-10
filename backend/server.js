import express from 'express';
import morgan from 'morgan';
import path from 'path'
//require is common js syntax where import is ES syntax
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import sellerRoutes from './routes/sellerRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB()

const app=express();

if(process.env.NODE_ENV==='development'){
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/',(req,res)=>{
  res.send("API is running....")
})

// app.use('/api/seller',sellerRoutes)
app.use('/api/products',productRoutes)



app.use('/api/users',userRoutes)

app.use('/api/orders',orderRoutes)

app.use('/api/upload',uploadRoutes)

app.get('/api/config/paypal',(req,res)=>res.send(process.env.PAYPAL_CLIENT_ID))

const __dirname=path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

app.use(notFound)

app.use(errorHandler)

const PORT=process.env.PORT||5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))