import {useEffect, useRef} from "react";

export const useObserver = (ref, condition, isLoading, callback, disable) => {
    const observer = useRef();

    useEffect(() => {
        if (disable) return;
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        let addPage = (entries, observer) => {
            if (entries[0].isIntersecting && condition) {
                callback()
            }
        };
        observer.current = new IntersectionObserver(addPage);
        observer.current.observe(ref.current);
    }, [isLoading, disable])
}
