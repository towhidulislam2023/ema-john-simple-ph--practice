import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);

    // console.log(cart);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const HandelAddToCart = (product) => {
        setCart([...cart, product])
        addToDb(product.id)
    }
    return (
        <>
            <div className='mainShopContainer'>
                <div className='productContainer'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            HandelAddToCart={HandelAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='CartContaiter'>
                    {/* <Cart cart={cart}></Cart> */}
                </div>
            </div>
        </>
    );
};

export default Shop;