import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const useBanner = () => {
  const location = useLocation();
  const [showBanner, setShowBanner] = useState(false);
  useEffect(() => {
    // console.log(location);
    if (location.pathname === "/" || location.pathname === "/home") {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }, [location]);
  return [showBanner, setShowBanner];
};
export default useBanner;
