
import { useContext, useState } from "react";
import { Data } from "../data/data";
import { FaCheck } from "react-icons/fa";
import { ScrollContext } from "../context/scrollcontext";
export function Besuchen (){

    const [clickedCards, setClickedCards] = useState([]);
    const {sectionRefs } = useContext(ScrollContext)
  // Handle card click
  const handleCardClick = (index) => {
    setClickedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
    return(
        <>
        <div ref={sectionRefs.section1 } className="w-full bg-gray-100 md:pb-20 pb-20 px-4 md:px-0">
          <div className="pt-10 max-w-[1100px] mx-auto">
  
            <h1 className="font-bold text-2xl md:text-4xl pb-4 ">{Data.title}</h1>
            <p className="text-[20px] leading-inherit text-[#737679] font-normal font-outfit m-0 p-0 ">
              {Data.description}
            </p>
      
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Data.cardDatas.map((card, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden bg-white shadow-md cursor-pointer group"
                  onClick={() => handleCardClick(index)}
                >
                  <img
                    src={card.image}
                    alt="image"
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-4 ">
                    <h2 className="text-lg uppercase font-bold flex justify-center text-[#8B572A] group-hover:text-black transition-colors duration-300">
                      {card.title}
                    </h2>
                    <p className="text-md flex justify-center text-center text-gray-500 transition-colors duration-300">
                      {card.paragraph}
                    </p>
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