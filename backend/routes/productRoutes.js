import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from 'express-async-handler'

const router=express.Router()

//@desc Fetches all products
//@route GET /api/products
//@access Public Route
router.get('/',asyncHandler(async(req,res)=>{
  const products=await Product.find({})
  res.json(products)
}))

//@desc Fetches all product
//@route GET /api/products/:id
//@access Public Route
router.get('/:id',asyncHandler(async(req,res)=>{
  const product=await Product.findById(req.params.id)
  if(product){
    res.json(product)
  }else{
    res.status(404)//default 500
    throw new Error('Product not found')
  } 
}))

export default router