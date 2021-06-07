import React from 'react';
import { LazyImage } from '../../ui/LazyImage';

export const MainPageGallery = () => {
    return (
        <section className="landing__gallery landing-section">
            <header className="landing__section-header">
                <h5 className="landing__section-title">Most Popular</h5>
            </header>
            <div className="landing__gallery-body">
                <LazyImage
                    src="images/gal-1.jpeg"
                    alt="Item 1"
                    className="landing__gallery-img"
                    containerProps={{ className: 'landing__gallery-item landing__gallery-item--1' }}
                    placeholderComponent={<div className="image-placeholder" />}
                />
                <LazyImage
                    src="images/gal-2.jpeg"
                    alt="Item 1"
                    className="landing__gallery-img"
                    containerProps={{ className: 'landing__gallery-item landing__gallery-item--2' }}
                    placeholderComponent={<div className="image-placeholder" />}
                />
                <LazyImage
                    src="images/gal-3.jpeg"
                    alt="Item 1"
                    className="landing__gallery-img"
                    containerProps={{ className: 'landing__gallery-item landing__gallery-item--3' }}
                    placeholderComponent={<div className="image-placeholder" />}
                />
                <LazyImage
                    src="images/gal-4.jpeg"
                    alt="Item 1"
                    className="landing__gallery-img"
                    containerProps={{ className: 'landing__gallery-item landing__gallery-item--4' }}
                    placeholderComponent={<div className="image-placeholder" />}
                />
                <LazyImage
                    src="images/gal-5.jpeg"
                    alt="Item 1"
                    className="landing__gallery-img"
                    containerProps={{ className: 'landing__gallery-item landing__gallery-item--5' }}
                    placeholderComponent={<div className="image-placeholder" />}
                />
                <LazyImage
                    src="images/gal-6.jpeg"
                    alt="Item 1"
                    className="landing__gallery-img"
                    containerProps={{ className: 'landing__gallery-item landing__gallery-item--6' }}
                    placeholderComponent={<div className="image-placeholder" />}
                />
                <LazyImage
                    src="images/gal-7.jpeg"
                    alt="Item 1"
                    className="landing__gallery-img"
                    containerProps={{ className: 'landing__gallery-item landing__gallery-item--7' }}
                    placeholderComponent={<div className="image-placeholder" />}
                />
                <LazyImage
                    src="images/gal-8.jpeg"
                    alt="Item 1"
                    className="landing__gallery-img"
                    containerProps={{ className: 'landing__gallery-item landing__gallery-item--8' }}
                    placeholderComponent={<div className="image-placeholder" />}
                />
                <LazyImage
                    src="images/gal-9.jpeg"
                    alt="Item 1"
                    className="landing__gallery-img"
                    containerProps={{ className: 'landing__gallery-item landing__gallery-item--9' }}
                    placeholderComponent={<div className="image-placeholder" />}
                />
                <LazyImage
                    src="images/gal-10.jpeg"
                    alt="Item 1"
                    className="landing__gallery-img"
                    containerProps={{
                        className: 'landing__gallery-item landing__gallery-item--10'
                    }}
                    placeholderComponent={<div className="image-placeholder " />}
                />
                <LazyImage
                    src="images/gal-11.jpeg"
                    alt="Item 1"
                    className="landing__gallery-img"
                    containerProps={{
                        className: 'landing__gallery-item landing__gallery-item--11'
                    }}
                    placeholderComponent={<div className="image-placeholder " />}
                />
                <LazyImage
                    src="images/gal-12.jpeg"
                    alt="Item 1"
                    className="landing__gallery-img"
                    containerProps={{
                        className: 'landing__gallery-item landing__gallery-item--12'
                    }}
                    placeholderComponent={<div className="image-placeholder " />}
                />
                <LazyImage
                    src="images/gal-13.jpeg"
                    alt="Item 1"
                    className="landing__gallery-img"
                    containerProps={{
                        className: 'landing__gallery-item landing__gallery-item--13'
                    }}
                    placeholderComponent={<div className="image-placeholder " />}
                />
                <LazyImage
                    src="images/gal-14.jpeg"
                    alt="Item 1"
                    className="landing__gallery-img"
                    containerProps={{
                        className: 'landing__gallery-item landing__gallery-item--14'
                    }}
                    placeholderComponent={<div className="image-placeholder " />}
                />
            </div>
        </section>
    );
};
