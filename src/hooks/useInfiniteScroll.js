import { useEffect, useContext } from "react";
import { AppContext } from "../AppContext";

function useInfiniteScroll(elementRef) {
  const { setIntersecting, Intersecting } = useContext(AppContext);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIntersecting((prev) => !prev);
        
        }
      },
      { threshold: 0.5 }
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
