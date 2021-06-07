import React, { useState, useEffect, useRef, useCallback } from 'react';

import { useMergedRefs } from '../utils';

const isSupportIntersectionObserver = () => !!window.IntersectionObserver;

export const LazyImage = React.forwardRef(function LazyImage(props, ref) {
    const {
        src,
        alt = '',
        placeholderComponent,
        containerProps,
        style: styleProp,
        ...other
    } = props;

    const [isLoaded, setIsLoaded] = useState(false);
    const nodeRef = useRef(null);
    const imageRef = useRef(null);
    const handleImageRef = useMergedRefs(imageRef, ref);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    const updateImage = useCallback(() => {
        if (imageRef.current) {
            const imageSrc = imageRef.current.dataset.src;

            if (imageSrc) {
                imageRef.current.src = imageSrc;
            }
        }
    }, []);

    useEffect(() => {
        const ioOptions = {
            root: null,
            rootMargin: '200px 0px'
        };

        const ioCallback = ([entry], observer) => {
            const { isIntersecting, target } = entry;

            if (isIntersecting) {
                updateImage();
                observer.unobserve(target);
            }
        };

        if (nodeRef.current && isSupportIntersectionObserver()) {
            const io = new IntersectionObserver(ioCallback, ioOptions);

            io.observe(nodeRef.current);

            return () => {
                io.disconnect();
            };
        }

        return undefined;
    }, [updateImage]);

    const style = {
        ...styleProp,
        ...(!isLoaded ? { display: 'none' } : {})
    };

    return (
        <div {...containerProps} ref={nodeRef}>
            <img
                {...other}
                {...(isSupportIntersectionObserver() ? { 'data-src': src } : { src })}
                alt={alt}
                style={style}
                onLoad={handleImageLoad}
                ref={handleImageRef}
            />
            {!isLoaded && placeholderComponent}
        </div>
    );
});
