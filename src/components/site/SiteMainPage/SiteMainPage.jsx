import React from 'react';

import {
    GlobalSvg,
    MapPinSvg,
    TrophySvg,
    LockSvg,
    KeySvg,
    PresentationSvg
} from '../../../assets/svg';

export const SiteMainPage = () => {
    return (
        <div className="landing">
            <aside className="landing__sidebar">Sidebar</aside>

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

            <section className="landing__story-pictures">Story pictures</section>
            <section className="landing__story-content">Story content</section>

            <section className="landing__homes">Homes</section>

            <section className="landing__gallery">Gallery</section>

            <footer className="landing__footer">Footer</footer>
        </div>
    );
};
