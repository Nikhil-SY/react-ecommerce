import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { UseDispatch } from 'react-redux';
import { remove, order} from '../Store/cartslice';
import { useNavigate } from 'react-router-dom';



export default function Cart() {
  const navigate = useNavigate()
    const productCart = useSelector(state=>state.cart) //.cart is name of the reducer in store
    const dispatch = useDispatch()
    const removeFromCart=(product)=>{
        dispatch(remove(product))
    }
   
  
    function placeOrder(){
      if(productCart.length !== 0){
        dispatch(order())
        alert('Order Successful')
        
        navigate('/')
      }
      else{
        alert('Add items to the cart')
        navigate('/')
      }
      
    }
  return (
    <div>
    <div className='row '>
    
    {productCart.map((product)=>(
        <div className='col-md-4 mb-2 col-sm-6 col-lg-3'>
        <Card style={{ width: '18rem' }} className='h-100 ' >
        <Card.Img variant="top" src={product.images} alt='Error loading' height={180} width={35}/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
           INR: {product.price}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer><Button onClick={()=>removeFromCart(product)} variant="danger">Remove from cart</Button></Card.Footer>
      </Card>
      </div>
      
    ))}
    <Button style={{width:'100px',textAlign:'center',margin:'auto'}} onClick={()=>placeOrder()}>Buy</Button>
   
    </div>
    </div>
  )
}
