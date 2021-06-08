import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { MenuSvg } from '../../assets/svg';
import { Logo } from '../Logo';
import { HeaderNavLinks } from './HeaderNavLinks';
import { HeaderSwipeableDrawer } from './HeaderSwipeableDrawer';

const HeaderNav = React.forwardRef(function HeaderNav(props, forwardedRef) {
    const { className, ...other } = props;
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleOpenDrawer = useCallback(() => {
        setOpenDrawer(true);
    }, [setOpenDrawer]);

    const handleCloseDrawer = useCallback(() => {
        setOpenDrawer(false);
    }, [setOpenDrawer]);

    return (
        <nav {...other} className={classNames('header-nav', className)} ref={forwardedRef}>
            <Logo />

            <HeaderNavLinks />

            <button
                className="icon-btn icon-btn--medium header-nav__menu-btn"
                onClick={handleOpenDrawer}
            >
                <MenuSvg />
            </button>

            <HeaderSwipeableDrawer
                open={openDrawer}
                onOpen={handleOpenDrawer}
                onClose={handleCloseDrawer}
            />
        </nav>
    );
});

HeaderNav.propTypes = {
    className: PropTypes.string
};

export { HeaderNav };
