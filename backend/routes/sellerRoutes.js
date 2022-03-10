import express from "express";
import { getSellerProductList } from "../controllers/productController.js";
// import { protect, admin } from "../middleware/authMiddleware.js";
import { protect, admin, sellerOrAdmin,seller } from "../middleware/authMiddleware.js";

const router=express.Router()

router.get('/user/products/:id',protect,seller,getSellerProductList)

export default router