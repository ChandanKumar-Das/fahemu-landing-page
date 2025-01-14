import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 

const SafariPlanner = () => {
  
  const [date, setDate] = useState(new Date());

  return (
    <>

              <div className="w-full  bg-gray-100 pb-20">
              <div className="pt-10 max-w-[1100px] mx-auto">
      
                <h1 className="font-bold text-4xl pb-4 ">5. Wann Planst Du Deine Safari?</h1>
                <p className="text-[20px] leading-inherit text-[#737679] font-normal font-outfit m-0 p-0 ">
                Bitte gib uns deine Reisedaten bekannt. Wenn diese noch nicht feststehen, nenne uns bitte deine ungefähren Reisedaten.
                </p>
                </div>
                <div className=" flex justify-center p-6">
        <Calendar
          onChange={setDate}
          value={date}
          className="react-calendar"
        />
      </div>
                </div>

      
     

     
     

    </>
  );
};


export default SafariPlanner;
