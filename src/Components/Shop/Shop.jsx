import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
    // useEffect(() => {
    //     const storedCart = getShoppingCart()
    //     const savedCart = []
    //     // console.log(storedCart);
    //     //!........................................
    //     // ! step-1 get id
    //     //!.......................................
    //     for (const id in storedCart) {
    //         // console.log(id);
    //         //!........................................
    //         // ! step-2 get product by id using find matthod
    //         //!.......................................
    //         const AddedProduct = products.find(product => id === product.id)
    //         //!........................................
    //         // ! step-3 set product quantity
    //         //!.......................................
    //         if (AddedProduct) {
    //             const quantity = storedCart[id]
    //             AddedProduct.quantity = quantity
    //             //!........................................
    //             // ! step-4 added product to the saveCard
    //             //!.......................................
    //             savedCart.push(AddedProduct)
    //         }

    //         // console.log(AddedProduct);

    //     }
    //     //!........................................
    //     // ! step-5 Set the card
    //     //!.......................................
    //     setCart(savedCart)

    // }, [products])

    useEffect(() => {
        const storedCard = getShoppingCart();
        // console.log(storedCard);
        const savedCart = []
        // step 1  get id
        for (const id in storedCard) {
            // console.log(id);
            const addedCart = products.find(pd => id === pd.id)
            if (addedCart) {
                addedCart.quantity = storedCard[id]
            }
            // console.log(addedCart);
            savedCart.push(addedCart)
        }

        setCart(savedCart)

    }, [products]);

    const handelAddToCart = (product) => {
        let newCart = [];
        const exist = cart.find(pd => pd.id === product.id)
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exist.quantity = exist.quantity + 1
            const remainingProduct = cart.filter(pd=>pd.id !== exist.id)
            newCart = [...remainingProduct, exist]
        }
        setCart(newCart)
        addToDb(product.id)
    }
    // const handelAddToCart = (product) => {
    //     //if product doesnt exist in the cart,then set quantity 1
    //     //if exist ,then set quantity by 1
    //     let newCart = [];
    //     const exist = cart.find(pd => pd.id === product.id)
    //     if (!exist) {
    //         product.quantity = 1;
    //         newCart = [...cart, product]

    //     }
    //     else {
    //         exist.quantity = exist.quantity + 1
    //         const remainingProduct = cart.filter(pd => pd.id !== product.id)
    //         newCart = [...remainingProduct, exist]
    //     }
    //     // const newCart = [...cart, product]
    //     setCart(newCart)
    //     addToDb(product.id)
    // }

    return (
        <>
            <div className='mainShopContainer'>
                <div className='productContainer'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            HandelAddToCart={handelAddToCart}
                        ></Product>)
                    }
                </div>
                <div className='CartContaiter'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;