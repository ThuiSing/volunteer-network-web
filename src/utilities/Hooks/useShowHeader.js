import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const useShowHeader = () => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  useEffect(() => {
    // console.log(location);
    if (
      location.pathname === "/log-in" ||
      location.pathname === "/register-volunteer"
    ) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [location]);
  return [showHeader, setShowHeader];
};
export default useShowHeader;
