import React from 'react';
import "./Product.css"
const Product = (props) => {
    // console.log(props);
    const HandelAddToCart = props.HandelAddToCart
    const { id,name, img, price, seller, ratings } = props.product
    return (
        <>
        <div className='p-container'>
            <img className='productImg' src={img} alt="" />
            <div className='pd-ditails'>
                    <h2>{name}</h2>
                    <p className='price'>Price: ${price} </p>
                    <p>Manufacturer : {seller}</p>
                    <p>Rating : {ratings} start</p>
            </div>
                <button onClick={() => HandelAddToCart(props.product)}  className='addToCartBtn'>Add To Cart</button>
                
            
        </div>
            
        </>
    );
};

export default Product;