import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HeaderNavLinks = (props) => {
    const { className, ...other } = props;

    return (
        <ul {...other} className={classNames('header-nav__links', className)}>
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
    );
};

HeaderNavLinks.propTypes = {
    className: PropTypes.string
};

export { HeaderNavLinks };
