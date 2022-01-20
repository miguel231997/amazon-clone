import React from "react"
import './Home.css'
import Product from "./Product.jsx"

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home-container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="homeimg" className="home-image" />
                    <div className="home-row">
                        <Product
                            id = "123456"
                            title = "Bennet Mystic 15.6 inch laptop shoulder messegner sling office bag, water reppellent"
                            price = {11.96}
                            rating = {5}
                            image = "https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"

                        />
                        <Product
                            id = "123457"
                            title = "Bennet Mystic 15.6 inch laptop shoulder messegner sling office bag, water reppellent"
                            price = {11.96}
                            rating = {5}
                            image = "https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                        />
                    </div>
                    <div className="home-row">
                    <Product
                            id = "123458"
                            title = "Bennet Mystic 15.6 inch laptop shoulder messegner sling office bag, water reppellent"
                            price = {11.96}
                            rating = {5}
                            image = "https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                        />
                        <Product
                            id = "12349"
                            title = "Bennet Mystic 15.6 inch laptop shoulder messegner sling office bag, water reppellent"
                            price = {11.96}
                            rating = {5}
                            image = "https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                        />
                        <Product
                            id = "1234510"
                            title = "Bennet Mystic 15.6 inch laptop shoulder messegner sling office bag, water reppellent"
                            price = {11.96}
                            rating = {5}
                            image = "https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                        />
                    </div>
                    <div className="home-row">
                    <Product
                            id = "1234511"
                            title = "Bennet Mystic 15.6 inch laptop shoulder messegner sling office bag, water reppellent"
                            price = {11.96}
                            rating = {5}
                            image = "https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
