import React from 'react';

import {
    GlobalSvg,
    MapPinSvg,
    TrophySvg,
    LockSvg,
    KeySvg,
    PresentationSvg
} from '../../../assets/svg';

import { MainPageGallery } from './MainPageGallery';
import { MainPageHomes } from './MainPageHomes';

export const SiteMainPage = () => {
    return (
        <div className="landing">
            <header className="landing__header">Header</header>

            <section className="landing__top-realtors">Realtors</section>

            {/* Features section */}

            <section className="landing__features">
                <div className="feature">
                    <GlobalSvg className="feature__icon" />
                    <h4 className="feature__title">World&apos;s best luxury homes</h4>
                    <p className="feature__text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio
                        necessitatibus pariatur voluptatibus.
                    </p>
                </div>
                <div className="feature">
                    <TrophySvg className="feature__icon" />
                    <h4 className="feature__title">Only the best properties</h4>
                    <p className="feature__text">
                        Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
                        necessitatibus pariatur voluptatibus.
                    </p>
                </div>
                <div className="feature">
                    <MapPinSvg className="feature__icon" />
                    <h4 className="feature__title">All homes in in top locations</h4>
                    <p className="feature__text">
                        Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed
                        a eligendi aut quia.
                    </p>
                </div>
                <div className="feature">
                    <KeySvg className="feature__icon" />
                    <h4 className="feature__title">New home in one week</h4>
                    <p className="feature__text">
                        Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur
                        harum.
                    </p>
                </div>
                <div className="feature">
                    <PresentationSvg className="feature__icon" />
                    <h4 className="feature__title">Top 1% realtors</h4>
                    <p className="feature__text">
                        Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit.
                    </p>
                </div>
                <div className="feature">
                    <LockSvg className="feature__icon" />
                    <h4 className="feature__title">Secure payments</h4>
                    <p className="feature__text">
                        Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.
                    </p>
                </div>
            </section>

            {/* Homes section */}

            <MainPageHomes />

            {/* Story section */}

            <section className="landing__story landing__section">
                <div className="story">
                    <div className="story__picture">
                        <div className="story__picture-base" />
                        <img
                            src="/images/house-2.jpeg"
                            alt="Story house"
                            className="story__picture-img"
                        />
                    </div>
                    <div className="story__body">
                        <h5 className="story__subtitle">Happy Customers</h5>
                        <h2 className="story__title">
                            &ldquo;The best decision of our lives&rdquo;
                        </h2>
                        <p className="story__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
                            labore nobis non eos veritatis aliquam ipsa molestias dolore tenetur
                            amet animi, atque maiores quo, officia itaque dolorem magni reiciendis
                            quaerat. Tenetur saepe, sint aliquam quam veniam, aperiam nobis
                            accusamus laborum repellendus dolorum officiis.
                        </p>
                        <a href="#" className="btn btn--link btn--primary story__btn">
                            Find your own home
                        </a>
                    </div>
                </div>
            </section>

            {/* Gallery section */}

            <MainPageGallery />

            <footer className="footer landing__footer">
                <span className="footer__date">{new Date().getFullYear()}</span>
                <span className="footer__logo-name">Luxury Estate</span>
            </footer>
        </div>
    );
};
