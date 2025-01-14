
import { useContext, useState } from "react";
import { GruppeData } from "../data/gruppedata";
import { FaCheck } from "react-icons/fa";
import { ScrollContext } from "../context/scrollcontext";
export function Gruppe (){

    const [clickedCards, setClickedCards] = useState([]);

      const {handleScroll} = useContext(ScrollContext)
  // Handle card click
  const handleCardClick = (index) => {
    handleScroll('section2')
    setClickedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [index]
    );
  };
    return(
        <>
        <div  className="w-full md:pb-20 pb-10 px-4 md:px-0">
          <div className="pt-10 max-w-[1100px] mx-auto">
            <h1 className="font-bold text-2xl md:text-4xl pb-4 ">{GruppeData.title}</h1>
            <p className="text-[20px] leading-inherit text-[#737679] font-normal font-outfit m-0 p-0 ">
            Bitte gib die Größe deiner Gruppe für die <span className="font-bold">Tansania Safari</span> an. <span className="font-bold">Wir organisieren private Safaris und Gruppentouren.</span>
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
              {GruppeData.cardDatas.map((card, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden shadow-xl cursor-pointer group"
                  onClick={() => handleCardClick(index)}
                 
                >
              
                  <img
                    src={card.image}
                    alt="image"
                    className="h-38 w-full object-cover "
                  />
      
             
                  <div className="p-4 bg-white">
                    <h2 className="text-sm md:text-lg uppercase font-bold flex justify-center text-[#8B572A] group-hover:text-black transition-colors duration-300">
                      {card.title}
                    </h2>
                    <p className="hidden md:block text-md flex justify-center text-center text-gray-500 transition-colors duration-300">
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