import { useEffect, useState } from "react";

function useInfiniteScroll(elementRef) {
  const [Intersecting, setIntersecting] = useState(false);
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
    console.log(Intersecting)
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef.current]);

  return { Intersecting };
}

export default useInfiniteScroll;
