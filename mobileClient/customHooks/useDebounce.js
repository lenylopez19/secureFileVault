//CORE
import { useEffect, useState } from "react";


/**
 * Custom hook that debounces a value.
 * @function
 * @param {*} value - The value to debounce.
 * @param {number} [delay=650] - The delay in milliseconds before updating the debounced value.
 * @returns {*} The debounced value.
 */
export const useDebounce = (value, delay = 650) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const handleTimer = setTimeout(() => {
            setDebounceValue(value)
        }, delay)
        return () => clearTimeout(handleTimer)
    }, [value, delay])
    return debounceValue
}