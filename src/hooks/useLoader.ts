import { useEffect, useState } from "react";

const useLoader = () => {
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    const handleLoadingStateCompleted = () => {
        setIsLoading(false);
    }

    useEffect(() => {
        if (document.readyState === "complete") { handleLoadingStateCompleted() };
        window.addEventListener("load", () => handleLoadingStateCompleted())
        return window.removeEventListener("load", () => handleLoadingStateCompleted());
    }, []);

    return isLoading;
}

export default useLoader;