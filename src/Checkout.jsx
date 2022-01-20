import React from "react"
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct.jsx";
import Subtotal from "./Subtotal.jsx";
import {useStateValue} from './StateProvider.js'


function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout-ad" />
                <div>
                    <h2 className="checkout-title">
                        Your shopping basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct

                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout-right"></div>
            <Subtotal />
        </div>
    )
}

export default Checkout
