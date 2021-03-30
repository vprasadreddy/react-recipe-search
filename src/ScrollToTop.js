import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isScrollIconVisible, setIsScrollIconVisible] = useState(false);
  const scrollToTopStyle = {
    width: "2em",
    height: "2em",
    position: "fixed",
    bottom: "23px",
    right: "21px",
    cursor: "pointer",
    color: "black"
  };

  const boxShadow = {
    width: "2.5em",
    height: "2.5em",
    position: "fixed",
    bottom: "20px",
    right: "18px",
    boxShadow: "0 0 5px #888",
    borderRadius: "5px",
    backgroundColor: "#ecf0f1",
    zIndex: 2
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollIconVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const toggleScrollIconVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsScrollIconVisible(true);
    } else {
      setIsScrollIconVisible(false);
    }
  };
  return (
    <>
      {isScrollIconVisible && (
        <div style={boxShadow}>
          <FaArrowUp
            style={scrollToTopStyle}
            onClick={scrollToTop}
            title="Go to top"
          />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
