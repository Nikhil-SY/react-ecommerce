import React, { useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Alert  from 'react-bootstrap/Alert';
import {  useDispatch ,useSelector} from 'react-redux';
import { add } from '../Store/cartslice';
import { getProducts } from '../Store/productSlice';
export default function Product() {
    const dispatch = useDispatch();
   
    useEffect(()=>{
         dispatch(getProducts())   
        
    },[])

   
    const {data: products, status} = useSelector((state)=>state.products);
    
    if(status==='loading'){
        return <p>Loading...</p>
    }
    
    if(status==='error'){
        return <Alert key='danger' variant='danger'>Something went wrong!</Alert>
    }

    const addToCart=(product)=>{
     // dispatch an add action
     dispatch(add(product))
    }
   
  return (
    <div className='row '>
    
    {products.map((product)=>(
        <div className='col-md-4 mb-2 col-sm-6 col-lg-3'>
        <Card style={{ width: '18rem' }} className='h-100 ' >
        <Card.Img variant="top" src={product.images} alt='Error loading' height={180} width={35}/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
           INR: {product.price}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer><Button onClick={()=>addToCart(product)} variant="primary">Add to cart</Button></Card.Footer>
      </Card>
      </div>
    ))}
   
    </div>
  )
}
