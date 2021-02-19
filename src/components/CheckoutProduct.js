import React from 'react'
import { useStateValue } from '../StateProvider';

import './CheckoutProducts.css'

function CheckoutProduct({
    id, image, title, price, rating, hideButton
}) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id : id
        })
    }

    return (
        <div className={'checkoutproduct'}>
            <img 
                className={'checkoutproduct__image'}
                src={image}
            />
            <div className={'checkoutproduct__info'}>
                <p className={'checkoutproduct__title'}>{title}</p>
                <p className={'checkoutproduct__price'}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={'checkoutproduct__rating'}>
                    {Array(rating).fill().map((_,i) => (
                        <p>⭐</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
