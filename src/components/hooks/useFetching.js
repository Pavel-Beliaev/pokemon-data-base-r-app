import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
            setTimeout(() => {
                setIsLoading(false);
            },3000)
        } catch (e) {
            setIsLoading(false);
            setError(e.message);
        }
    }
    return [fetching, isLoading, error]
}