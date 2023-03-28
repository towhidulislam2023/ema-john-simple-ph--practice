import React from 'react';
import "./Cart.css"

const Cart = ({ cart }) => {
    console.log(cart);
    let price=0;
    let quantity=0
    let shippingPrice=0;
    for(const product of cart){
        if (product) {
            price = price + product.price * product.quantity
            quantity = quantity + product.quantity
            shippingPrice = shippingPrice + product.shipping;
            console.log(product);
        }
     
    }
    const tax= price * 7 /100
    return (
        <div>
            <h1>Total product: {cart.length}</h1>
            <div className='informationCenter'>
                <p>Selected Prodect: {quantity}</p>
                <p>Total Price: ${price}</p>
                <p>shippingPrice: ${shippingPrice}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
            </div>
          
            <h3 className='total'>Grand Total ${price + shippingPrice + tax}</h3>
                   </div>
    );
};

export default Cart;