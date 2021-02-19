import React from 'react'

import { useStateValue } from '../StateProvider'

import './Checkout.css'

import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className={'checkout'}>
            <div className={'checkout__left'}>
                <img 
                    className={'checkout_ad'}
                    src={'https://blog.hubspot.com/hubfs/How%20to%20Explain%20Banner%20Ads%20to%20Anyone-5.png'}
                />
                <div>
                    <h3 className={'checkout__username'}>Hello, {user?.email}</h3>
                    <h2 className={'checkout__title'}>Your Shopping Basket</h2>
                    {basket.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className={'checkout__right'}>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
