import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider'

import './Subtotal.css'

function Subtotal() {

    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();

    return (
        <div className={'subtotal'}>
            <CurrencyFormat
                renderText = {(value) => (
                    <div>
                        <p>
                            Subtotal ({basket.length} Items) : 
                            <strong> {value}</strong>
                        </p>
                        <small className={'subtotal__gift'}>
                            <input type='checkbox'/>&nbsp;This Order Contains a Gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button
                disabled={basket.length === 0}
                onClick={e => history.push('/payment')}
            >Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
