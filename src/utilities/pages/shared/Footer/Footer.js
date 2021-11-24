import React from "react";
import useShowHeader from "../../../Hooks/useShowHeader";

const Footer = () => {
  const [showHeader] = useShowHeader();
  return (
    <>
      {showHeader && (
        <footer className="text-center bg-gray-800 text-white py-5 mt-auto">
          <h1>All right Reserved</h1>
        </footer>
      )}
    </>
  );
};

export default Footer;
