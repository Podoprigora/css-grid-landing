import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import { HeaderNav } from '../HeaderNav';

const StickyHeaderNav = (props) => {
    const { open, ...other } = props;

    return (
        <CSSTransition in={open} classNames="sticky-header-nav" unmountOnExit timeout={300}>
            <div {...other} className="sticky-header-nav">
                <HeaderNav />
            </div>
        </CSSTransition>
    );
};

StickyHeaderNav.propTypes = {
    open: PropTypes.bool
};

export { StickyHeaderNav };
