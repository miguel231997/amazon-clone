import React from "react"
import './Product.css';

import { useStateValue } from './StateProvider.js'
function Product({id, title, price, image, rating}) {

    const [state, dispatch] = useStateValue();
    

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating

            }
        })
    }

    return (
        <div>
            <div className="product">
                <div className="product-info">
                    <p>{title}</p>
                    <p className="product-price">{price}</p>
                    <div className="product-rating">{rating} stars</div>
                </div>
                <img src={image} alt="product-img" className="product-image" />
                <button onClick={addToBasket} className="">add to basket</button>
            </div>
        </div>
    )
}

export default Product
