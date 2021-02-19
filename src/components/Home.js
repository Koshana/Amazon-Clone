import React from 'react'

import Product from './Product'

import './Home.css'

function Home() {
    return (
        <div className={'home'}>
            <div className={'home__container'}>
                <img 
                    className={'home__image'}
                    src={'https://www.k3stores.com/wp-content/uploads/2016/08/amazon-banner-e1473603104762.png'}
                />
                <div className={'home__row'}>
                    <Product
                        id={'00001'}
                        title = {'The Lean Startup'}
                        price = {20.59}
                        image = {'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'}
                        rating = {5}
                    />
                    <Product
                        id={'00002'}
                        title={'New Tissot PRX Stainless Steel Blue Dial Mens Watch T137.410.11.041.00'}
                        price={424}
                        image={'https://i.ebayimg.com/thumbs/images/g/QjwAAOSw1A1gF0vf/s-l300.webp'}
                        rating={4}
                    />
                </div>
                <div className={'home__row'}>
                    <Product
                        id={'00003'}
                        title={'Samsung Genuine Galaxy Z Fold 2 5G Leather Flip Cover Case EF-FF916 - 2colors'}
                        price={87.70}
                        image={'https://i.ebayimg.com/thumbs/images/g/Y0UAAOSwTwRf235-/s-l225.webp'}
                        rating={3}
                    />
                    <Product
                        id={'00004'}
                        title={'Citizen CA0690-88L Eco-drive Chronograph Mens Watch'}
                        price={160}
                        image={'https://i.ebayimg.com/thumbs/images/g/0YcAAOSwvGZcD-1s/s-l300.webp'}
                        rating={3}
                    />
                    <Product
                        id={'00005'}
                        title={'Samsung Galaxy A20 SM-A205U 32GB - Black (Sprint T-mobile AT&T) Unlocked A stock'}
                        price={130}
                        image={'https://i.ebayimg.com/thumbs/images/g/x58AAOSwqktdUXIx/s-l225.webp'}
                        rating={5}
                    />
                </div>
                <div className={'home__row'}>
                    <Product
                        id={'00006'}
                        title={'Samsung QE55Q75TAT 55" 4K QLED Smart TV - Black'}
                        price={1502.37}
                        image={'https://i.ebayimg.com/thumbs/images/g/rMkAAOSw9L1f0lRy/s-l300.webp'}
                        rating={5}
                    />
                </div>
                <div className={'home__row'}>
                    <Product
                        id={'00007'}
                        title={'Apple iPhone 11 Pro Max 64gb Grey Verizon Unlocked Great'}
                        price={629.00}
                        image={'https://i.ebayimg.com/thumbs/images/g/d94AAOSwAsFehQSs/s-l300.webp'}
                        rating={5}
                    />
                    <Product
                        id={'00008'}
                        title={'Apple AirPods Pro Bluetooth In-Ear Headphones with Wireless Charging Case White'}
                        price={89.99}
                        image={'https://i.ebayimg.com/thumbs/images/g/-IgAAOSwoyRgHmTb/s-l300.webp'}
                        rating={4}
                    />
                    <Product
                        id={'00009'}
                        title={'Apple Mac mini Intel Core i3 8GB Memory 128GB SSD - Gray - (MRTR2LL/A)'}
                        price={561.00}
                        image={'https://i.ebayimg.com/thumbs/images/g/lhEAAOSw7HFfMwlp/s-l300.webp'}
                        rating={4}
                    />
                    <Product
                        id={'00010'}
                        title={'Apple Watch Series 5 44mm Titanium EDITION GPS + Cellular - Silver + Sport Band'}
                        price={389.00}
                        image={'https://i.ebayimg.com/thumbs/images/g/9dkAAOSwyd1gIVly/s-l300.webp'}
                        rating={3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
