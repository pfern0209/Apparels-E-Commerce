import {  useEffect } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import {Table, Button,Row,Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from "../components/Message"
import Loader from "../components/Loader"
import { deleteProduct,createProduct,sellerProductsList } from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'

const SellerProductListScreen = () => {
    const params=useParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
  
    // const productList=useSelector(state=>state.productList)
    // const {loading,error,products,pages,page}=productList
  
    // const productDelete=useSelector(state=>state.productDelete)
    // const {loading:loadingDelete,error:errorDelete,success:successDelete}=productDelete

    // const sellerProducts=useSelector(state=>state.sellerProductList)
    // const{sellerProducts}=sellerProducts
  
    
  
    // const productCreate=useSelector(state=>state.productCreate)
    // const {loading:loadingCreate,error:errorCreate,success:successCreate,product:createdProduct}=productCreate
  
    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin
  
    // useEffect(()=>{
    //   dispatch({type: PRODUCT_CREATE_RESET})
    //   if(!userInfo.isSeller){
    //       console.log("not seller")
    //     navigate('/login')
    //   }
    //   if(successCreate){
    //     navigate(`/admin/product/${createdProduct._id}/edit`)
    //     console.log("success create")
    //   }else{
    //     dispatch(sellerProductsList(userInfo._id))
    //   }
    // },[dispatch,userInfo,navigate,successDelete,successCreate,createdProduct])

  //   useEffect(()=>{
  //     dispatch({type: PRODUCT_CREATE_RESET})
  //     if(!userInfo.isSeller){
  //         console.log("not seller")
  //       navigate('/login')
  //     }
  //       dispatch(sellerProductsList(userInfo._id))
     
  //   },[dispatch,userInfo,navigate,successDelete,successCreate,createdProduct])
  
  //   const createProductHandler=(product)=>{
  //     dispatch(createProduct())
  //   }
  
  //   const deleteHandler=(id)=>{
  //     if(window.confirm("Are you sure")){
  //       dispatch(deleteProduct(id))
  //     }
  //   }
  // console.log(products.length)
  //   var sellerCreatedProducts=[]
  //   if(userInfo.isSeller){
  //     sellerCreatedProducts=products.filter(checkCreated);
  //     function checkCreated(product){
  //       if(product.user === userInfo._id){
  //         return product
  //       }
  //     }
  //   }
  
   
    
  
  
    return (
      <>
        <h1>Hello</h1>
      </>
    )
  }
  

export default SellerProductListScreen
