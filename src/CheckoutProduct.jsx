import React from "react";
import './CheckoutProduct.css'
import {useStateValue} from './StateProvider.js'


function CheckoutProduct({id, image, title, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div>
            <div className="checkout-product">
                <img src={image} alt="product-img" className="checkout-product-image" />
                    <div className="checkout-product-info">
                        <p className="checkout-product-title">{title}</p>
                        <p className="checkout-product-price"><small>$</small><strong>{price}</strong></p>
                        <div className="checkout-product-rating">{rating}</div>
                    </div>
                <button onClick={removeFromBasket} >remove from basket</button>
            </div>
        </div>

    )
}

export default CheckoutProduct
