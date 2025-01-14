import { createContext, useRef } from "react";

export const ScrollContext = createContext()

export  function ScrollContextProvider ({ children }){
    
    const sectionRefs = {
        section1: useRef(null),
        section2: useRef(null),
        section3: useRef(null),
        section4: useRef(null),
        section5: useRef(null)
      };

      const handleScroll = (section) => {
        if (sectionRefs[section]?.current) {
          sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
        }
      };
    
    return(
        <>
         <ScrollContext.Provider value= {{sectionRefs,handleScroll}}>
         { children }
         </ScrollContext.Provider>
        </>
    )
}