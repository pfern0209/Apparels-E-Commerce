import express from "express";
import { getProductById,getProducts,deleteProduct,createProduct,updateProduct,createProductReview,getTopProducts,getSellerProductList } from "../controllers/productController.js";
// import { protect, admin } from "../middleware/authMiddleware.js";
import { protect, admin, sellerOrAdmin,seller } from "../middleware/authMiddleware.js";

const router=express.Router()

router.get('/user/:id',protect,seller,getSellerProductList)

// router.route('/').get(getProducts).post(protect,admin,createProduct)
router.route('/').get(getProducts).post(protect,sellerOrAdmin,createProduct)
router.route('/:id/reviews').post(protect,createProductReview)
router.get('/top',getTopProducts)

// router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct).put(protect,admin,updateProduct)
router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct).put(protect,sellerOrAdmin,updateProduct)

export default router