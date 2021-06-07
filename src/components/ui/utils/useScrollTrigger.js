import { useState, useCallback, useEffect, useRef, useMemo } from 'react';

const getTarget = () => (typeof window !== 'undefined' ? window : null);

export function useScrollTrigger(params) {
    const { disableReverseScroll = false, threshold: thresholdProp = 200 } = params || {};
    const [threshold, setThreshold] = useState(thresholdProp);

    const [trigger, setTrigger] = useState(false);
    const currentPositionRef = useRef(0);

    const handleScroll = useCallback(() => {
        const prevPosition = currentPositionRef.current;

        const target = getTarget();

        if (target) {
            currentPositionRef.current = target.pageYOffset;
        }

        if (disableReverseScroll && prevPosition > 0 && currentPositionRef.current < prevPosition) {
            setTrigger(false);
        } else if (currentPositionRef.current > threshold) {
            setTrigger(true);
        } else {
            setTrigger(false);
        }
    }, [threshold, disableReverseScroll]);

    useEffect(() => {
        handleScroll();

        const target = getTarget();

        if (target) {
            target.addEventListener('scroll', handleScroll);

            return () => {
                target.removeEventListener('scroll', handleScroll);
            };
        }

        return undefined;
    }, [handleScroll]);

    return useMemo(() => ({ trigger, setThreshold }), [trigger]);
}
