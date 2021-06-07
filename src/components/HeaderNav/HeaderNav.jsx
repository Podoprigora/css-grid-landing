import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Logo } from '../Logo';
import { MenuSvg } from '../../assets/svg';

const HeaderNav = React.forwardRef(function HeaderNav(props, forwardedRef) {
    const { open, className, ...other } = props;

    return (
        <nav {...other} className={classNames('header-nav', className)} ref={forwardedRef}>
            <Logo />

            <ul className="header-nav__links">
                <li className="header-nav__link-item">
                    <a href="#" className="link header-nav__link">
                        Home
                    </a>
                </li>
                <li className="header-nav__link-item">
                    <a href="#" className="link header-nav__link">
                        Services
                    </a>
                </li>
                <li className="header-nav__link-item">
                    <a href="#" className="link header-nav__link">
                        Properties
                    </a>
                </li>
                <li className="header-nav__link-item">
                    <a href="#" className="link header-nav__link">
                        Blog
                    </a>
                </li>
                <li className="header-nav__link-item">
                    <a href="#" className="link header-nav__link">
                        Contact
                    </a>
                </li>
            </ul>

            <button className="icon-btn icon-btn--medium header-nav__menu-btn">
                <MenuSvg />
            </button>
        </nav>
    );
});

HeaderNav.propTypes = {
    className: PropTypes.string
};

export { HeaderNav };
