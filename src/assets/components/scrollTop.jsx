import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const scrollTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [pathname])
    return null;
};

export default scrollTop;