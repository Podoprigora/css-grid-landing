import { useMemo } from 'react';
import { setRef } from './setRef';

export function useMergedRefs(...refs) {
    return useMemo(() => {
        return (value) => {
            refs.forEach((ref) => {
                setRef(ref, value);
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...refs]);
}
