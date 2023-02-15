import {useState} from "react";
import {useDebounce} from "./useDebounce";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) => {
        try {
            setIsLoading(true);
            await callback(...args);
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
            setError(e.message);
        }
    }
    return [fetching, isLoading, error]
}