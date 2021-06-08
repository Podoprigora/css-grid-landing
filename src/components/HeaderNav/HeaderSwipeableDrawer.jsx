import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { useMediaQuery, SwipeableDrawer } from '@material-ui/core';

import { HeaderNavLinks } from './HeaderNavLinks';
import { CloseSvg } from '../../assets/svg';

const HeaderSwipeableDrawer = (props) => {
    const { open, onOpen, onClose, ...other } = props;

    const isTablet = useMediaQuery('(max-width: 768px)');

    const handleOpenDrawer = useCallback(() => {
        if (onOpen) {
            onOpen();
        }
    }, [onOpen]);

    const handleCloseDrawer = useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);

    if (!isTablet) {
        return null;
    }

    return (
        <SwipeableDrawer
            anchor="right"
            open={open}
            onOpen={handleOpenDrawer}
            onClose={handleCloseDrawer}
        >
            <div {...other} className="mobile-nav">
                <header className="mobile-nav__header">
                    <button
                        className="icon-btn icon-btn--medium mobile-nav__close-btn"
                        onClick={handleCloseDrawer}
                    >
                        <CloseSvg />
                    </button>
                </header>
                <div className="mobile-nav__body">
                    <HeaderNavLinks className="mobile-nav__links" />
                </div>
            </div>
        </SwipeableDrawer>
    );
};

HeaderSwipeableDrawer.propTypes = {
    open: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func
};

export { HeaderSwipeableDrawer };
