import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NumberFormat from 'react-number-format';

import {
    AreaSizeSvg,
    ArrowRightSvg,
    FavoriteOutlineSvg,
    FavoriteSvg,
    MapPinSvg,
    ProfileMaleSvg
} from '../../assets/svg';

const HomeTileInner = (props) => {
    const {
        image,
        title,
        price,
        address,
        area,
        room,
        addedToWishlist = false,
        className,
        ...other
    } = props;

    const formattedPrice = price && (
        <NumberFormat value={price} displayType="text" thousandSeparator prefix="$ " />
    );

    const formattedRooms = `${room} room${room > 1 ? 's' : ''}`;

    return (
        <div {...other} className={classNames('home-tile', className)}>
            <div className="home-tile__img-wrap">
                <img src={image} alt={title} className="home-tile__img" />
                <button
                    className={classNames('icon-btn home-tile__btn-favorites', {
                        'home-tile__btn-favorites--selected': addedToWishlist
                    })}
                >
                    {addedToWishlist ? <FavoriteSvg /> : <FavoriteOutlineSvg />}
                </button>
            </div>
            <header className="home-tile__header">
                <a href="#" className="icon-btn home-tile__btn-view">
                    <ArrowRightSvg />
                </a>
                <a href="#" className="link home-tile__title">
                    {title}
                </a>
                {formattedPrice && <h3 className="home-tile__price">{formattedPrice}</h3>}
            </header>
            <ul className="home-tile__features">
                {area && (
                    <li className="home-tile__feature">
                        <AreaSizeSvg className="home-tile__feature-icon" />
                        <span className="home-tile__feature-text home-tile__feature-text--strong u-text-nowrap">
                            {area} m<sub>2</sub>
                        </span>
                    </li>
                )}
                {formattedRooms && (
                    <li className="home-tile__feature">
                        <ProfileMaleSvg className="home-tile__feature-icon" />
                        <span className="home-tile__feature-text home-tile__feature-text--strong u-text-nowrap">
                            {formattedRooms}
                        </span>
                    </li>
                )}
                {address && (
                    <li className="home-tile__feature home-tile__feature--full-width">
                        <MapPinSvg className="home-tile__feature-icon" />
                        <span className="home-tile__feature-text">{address}</span>
                    </li>
                )}
            </ul>
        </div>
    );
};

HomeTileInner.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    rooms: PropTypes.number,
    area: PropTypes.number,
    address: PropTypes.string,
    addedToWishlist: PropTypes.bool,
    className: PropTypes.string
};

export const HomeTile = React.memo(HomeTileInner);
