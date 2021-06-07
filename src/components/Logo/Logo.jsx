import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Logo = (props) => {
    const { className, ...other } = props;

    return (
        <div {...other} className={classNames('logo', className)}>
            <span>Luxury</span>
            <span>Estate</span>
        </div>
    );
};

Logo.propTypes = {
    className: PropTypes.string
};

export { Logo };
