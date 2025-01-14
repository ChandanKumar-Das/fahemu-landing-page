
import { useContext, useState } from "react";
import { SafariData } from "../data/safari";
import { FaCheck } from "react-icons/fa";
import { ScrollContext } from "../context/scrollcontext";
export function Safari(){

    const [clickedCards, setClickedCards] = useState([]);
     
    const {sectionRefs,handleScroll}= useContext(ScrollContext)
       // Handle card click
    const handleCardClick = (index) => {
        handleScroll('section3')
        setClickedCards((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [index]
      );
  };
    return(
        <>
        <div ref={sectionRefs.section2} className="w-full  bg-gray-100 px-4 md:px-0 pb-10 md:pb-20">
          <div className="pt-10 max-w-[1100px] mx-auto">

            <h1 className="font-bold text-2xl md:text-4xl pb-4 ">{SafariData.title}</h1>
            <p className="text-[20px] leading-inherit text-[#737679] font-normal font-outfit m-0 p-0 ">
              {SafariData.description}
            </p>
      
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SafariData.cardDatas.map((card, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden shadow-md cursor-pointer group"
                  onClick={() => handleCardClick(index)}
                >
              
                  <img
                    src={card.image}
                    alt="image"
                    className="h-48 w-full object-cover"
                  />
      
             
                  <div className="p-4 bg-white">
                    <h2 className="text-lg uppercase font-bold flex justify-center text-[#8B572A] group-hover:text-black transition-colors duration-300">
                      {card.title}
                    </h2>
                  </div>
      
          
                  {clickedCards.includes(index) && (
                   <div className="absolute inset-0 bg-gradient-to-b from-[#8B572A]/30 to-[#8B572A]/100 flex items-center justify-center text-white">
                  <FaCheck className="text-white text-5xl" />
                 </div>
                 
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
      
      
    )
}