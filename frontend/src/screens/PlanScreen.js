import React from 'react'
import { useEffect, useState} from 'react'
import axios from 'axios'
import { PayPalButton } from "react-paypal-button-v2";
import {Link,useParams,useNavigate} from 'react-router-dom'
import {Row,Col,ListGroup,Image,Card,Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../components/Loader'
import Message from "../components/Message"
import { getOrderDetails, payOrder,deliverOrder,updateStockAfterOrder } from '../actions/orderActions'
import { ORDER_PAY_RESET,ORDER_DELIVER_RESET } from '../constants/orderConstants';

const PlanScreen = () => {

  const navigate=useNavigate();
  
  const dispatch=useDispatch()

  const [sdkReady,setSdkReady]=useState(false)
  const params=useParams();

  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin

  useEffect(() => {
    const addPayPalScript=async()=>{
        if(!userInfo){
          navigate('/login')
        }

        const {data:clientId}=await axios.get('/api/config/paypal')
        const script=document.createElement('script')
        script.type='text/javascript'
        script.src=`https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`
        script.async=true
        script.onload=()=>{
          setSdkReady(true)
        }
        document.body.appendChild(script)
      }
    
    if(!userInfo.isSeller){
      if(!window.paypal){
        addPayPalScript()
      }else{
        setSdkReady(true)
      }
    }  
    
}, [dispatch,userInfo]) 

const successPaymentHandler=()=>{
  console.log("Hello")
  //dispatch toggle seller enable
}

  return (
    <ListGroup>
    <ListGroup.Item>
{/*                   
                  {!sdkReady ? <Loader/>:(
                    <PayPalButton currency="USD" amount={75} onSuccess={successPaymentHandler}/>               
                  )} */}
                  <h1>Hello</h1>
                </ListGroup.Item>
    </ListGroup>
  )
}

export default PlanScreen
