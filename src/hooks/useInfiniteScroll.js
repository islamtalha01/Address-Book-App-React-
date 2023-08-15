import { useEffect, useRef, useContext, useState } from "react";
import { AppContext } from "../AppContext";

function useInfiniteScroll(elementRef) {
  const { setIntersecting, Intersecting } = useContext(AppContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIntersecting((prev) => !prev);
          console.log("scrolled Down");
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef.current]);

  return Intersecting;
}

export default useInfiniteScroll;
