import React, { useEffect, useRef } from 'react';

import { useScrollTrigger } from '../../ui/utils';
import { HeaderNav } from '../../HeaderNav';
import { StickyHeaderNav } from '../../StickyHeaderNav';

export const MainPageHeader = () => {
    const navNodeRef = useRef(null);
    const { trigger: scrollTrigger, setThreshold } = useScrollTrigger();

    useEffect(() => {
        if (navNodeRef.current) {
            const height = navNodeRef.current.clientHeight;

            setThreshold(height);
        }
    }, [setThreshold]);

    return (
        <header className="landing__header">
            <HeaderNav className="landing__header-nav" ref={navNodeRef} />
            <StickyHeaderNav open={scrollTrigger} />

            <div className="landing__header-content">
                <h1 className="landing__header-title">We Prowide You The Best Experience</h1>
                <div className="landing__header-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vitae,
                    repudiandae quis iure quod voluptatum sit necessitatibus incidunt ratione facere
                    ullam facilis quae, odit fuga blanditiis est expedita ipsum in.
                    <div>
                        <button className="btn btn--primary landing__header-btn">
                            All Property
                        </button>
                    </div>
                </div>
            </div>

            <div className="landing__header-seenon seenon">
                <h6 className="seenon__title">Seen on</h6>
                <ul className="seenon__list">
                    <li className="seenon__item">
                        <a href="#" className="seenon__link">
                            <img src="images/logo-bbc.png" alt="BBC Logo" className="seenon__img" />
                        </a>
                    </li>
                    <li className="seenon__item">
                        <a href="#" className="seenon__link">
                            <img src="images/logo-bi.png" alt="Logo Bi" className="seenon__img" />
                        </a>
                    </li>
                    <li className="seenon__item">
                        <a href="#" className="seenon__link">
                            <img
                                src="images/logo-forbes.png"
                                alt="Logo Forbes"
                                className="seenon__img"
                            />
                        </a>
                    </li>
                    <li className="seenon__item">
                        <a href="#" className="seenon__link">
                            <img
                                src="images/logo-techcrunch.png"
                                alt="Logo Techcrunch"
                                className="seenon__img"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};
