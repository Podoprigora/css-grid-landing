import React from 'react';

import { HomeTile } from '../../HomeTile';

export const MainPageHomes = () => {
    return (
        <section className="landing__section landing__homes">
            <header className="landing__section-header">
                <h5 className="landing__section-title">Recently Added</h5>
            </header>
            <div className="landing__section-body">
                <HomeTile
                    image="images/house-1.jpeg"
                    title="Modern Familiy Apartment"
                    price={1200000}
                    room={5}
                    area={325}
                    address="3994 Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                <HomeTile
                    image="images/house-2.jpeg"
                    title="Modern Glass Villa"
                    price={2750000}
                    room={6}
                    area={450}
                    address="3994 Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    addedToWishlist
                />
                <HomeTile
                    image="images/house-3.jpeg"
                    title="Cozy Country House"
                    price={850000}
                    room={4}
                    area={250}
                    address="3994 Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                <HomeTile
                    image="images/house-4.jpeg"
                    title="Large Rustical Villa"
                    price={1950000}
                    room={6}
                    area={480}
                    address="3994 Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                <HomeTile
                    image="images/house-5.jpeg"
                    title="Majestic Palace House"
                    price={9500000}
                    room={18}
                    area={4230}
                    address="3994 Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
                <HomeTile
                    image="images/house-6.jpeg"
                    title="Modern Familiy Apartment"
                    price={600000}
                    room={3}
                    area={180}
                    address="3994 Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    addedToWishlist
                />
            </div>

            <div className="landing__homes-action-bar">
                <a href="#" className="btn btn--link btn--primary">
                    Show more
                </a>
            </div>
        </section>
    );
};
