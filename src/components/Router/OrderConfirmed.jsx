import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderConfirmed = () => {
    const navigate = useNavigate()
  return (
    <div>
      <h1>Order Confirmed</h1>
      <button onClick={()=>navigate(-1)}>Back To Home Page</button>
    </div>
  )
}

export default OrderConfirmed
