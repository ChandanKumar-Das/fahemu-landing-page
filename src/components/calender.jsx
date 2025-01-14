import React, { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import { ScrollContext } from '../context/scrollcontext';

const SafariPlanner = () => {
  
  const [date, setDate] = useState(new Date());
  const {sectionRefs,handleScroll}= useContext(ScrollContext)

  return (
            <>

              <div ref={sectionRefs.section4} className="w-full px-4 md:px-0  bg-gray-100 pb-20">
              <div className="pt-10 max-w-[1100px] mx-auto">
                <h1 className="font-bold text-2xl md:text-4xl pb-4 ">5. Wann Planst Du Deine Safari?</h1>
                <p className="text-[20px] leading-inherit text-[#737679] font-normal font-outfit m-0 p-0 ">
                Bitte gib uns deine Reisedaten bekannt. Wenn diese noch nicht feststehen, nenne uns bitte deine ungefähren Reisedaten.
                </p>
                </div>
                <div className=" flex justify-center p-6">
        <Calendar
          onClickDay={()=>handleScroll('section5')}
          onChange={setDate}
          value={date}
          className="react-calendar"
          minDate={new Date()}
        />
      </div>
                </div>

      
     

     
     

    </>
  );
};


export default SafariPlanner;
