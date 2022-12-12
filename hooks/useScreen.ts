import {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {dimensions} from "../scssGlobals";


export function useMaxScreen(width: number) {
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const isMaxWidth = useMediaQuery({ query: `(max-width: ${width}px)` });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted && isMaxWidth;
}


export function useSmallScreen() {
    return useMaxScreen(dimensions.small);
}


export function useMediumScreen() {
    return useMaxScreen(dimensions.medium);
}


export function useLargeScreen() {
    return useMaxScreen(dimensions.large);
}
