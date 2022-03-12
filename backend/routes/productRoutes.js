import express from "express";
<<<<<<< HEAD
import { getProductById,getProducts,deleteProduct,createProduct,updateProduct,createProductReview,getTopProducts,getSellerProductList } from "../controllers/productController.js";
// import { protect, admin } from "../middleware/authMiddleware.js";
import { protect, admin, sellerOrAdmin,seller } from "../middleware/authMiddleware.js";

const router=express.Router()

router.get('/user/:id',protect,seller,getSellerProductList)
=======
import { getProductById,getProducts,deleteProduct,createProduct,updateProduct,createProductReview,getTopProducts, getSellerCreatedProducts } from "../controllers/productController.js";
// import { protect, admin } from "../middleware/authMiddleware.js";
import { protect, admin, sellerOrAdmin } from "../middleware/authMiddleware.js";

const router=express.Router()

>>>>>>> acd53af42c0d52659c3113314a277fe22dcc459b

// router.route('/').get(getProducts).post(protect,admin,createProduct)
router.route('/').get(getProducts).post(protect,sellerOrAdmin,createProduct)
router.route('/:id/reviews').post(protect,createProductReview)
router.get('/top',getTopProducts)

<<<<<<< HEAD
// router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct).put(protect,admin,updateProduct)
router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct).put(protect,sellerOrAdmin,updateProduct)

=======
router.get('/user/:id',getSellerCreatedProducts)

// router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct).put(protect,admin,updateProduct)
router.route('/:id').get(getProductById).delete(protect,admin,deleteProduct).put(protect,sellerOrAdmin,updateProduct)
// router.route('/:id').get(getProductById).delete(protect,sellerOrAdmin,deleteProduct).put(protect,sellerOrAdmin,updateProduct)
>>>>>>> acd53af42c0d52659c3113314a277fe22dcc459b
export default router