
import { useEffect, useRef, useContext, useState } from "react";
import { AppContext } from "../AppContext";


function useInfiniteScroll(elementRef) {
  const {setTotalUser}=useContext(AppContext)
const [isIntersecting, setIsIntersecting] = useState(false);
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
       setIsIntersecting(true)
       
      }
    },
    { overflow: "hidden",threshold: 1 }
  );

  if (elementRef.current) {
    observer.observe(elementRef.current);
  }

  return () => {
    if (elementRef.current) {
      observer.unobserve(elementRef.current);
    }
  };

  
}, [elementRef]);
 
return isIntersecting
 
}

export default useInfiniteScroll;

	
// const useInfiniteScroll = (ref) => {
//   const [isIntersecting, setIsIntersecting] = useState(false);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setIsIntersecting(true);
      
//     }, {
//       threshold: 1.0
//     });

// if (ref.current) {
//   observer.observe(ref.current);
// }

// return () => {
  
//   if(ref.current){
//   observer.unobserve(ref.current);
//   }
// };
//   }, [ref.current]);

//   return isIntersecting;
// };

// export default useInfiniteScroll