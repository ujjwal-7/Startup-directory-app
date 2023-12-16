import React, { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import StartupModal from './StartupModal';

const Startup = ({startup}) => {

  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {

    if(isPopupOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
    
  }, [isPopupOpen]);

  
  return (

    <>
      <div className='flex flex-col gap-3 h-40 p-4 border-2 border-[#ddd] rounded-md hover:cursor-pointer hover:border-black transition-color duration-300 ease-in-out' onClick={() => setPopupOpen(true)}>
        <p className={`text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap`}>{startup.StartupName}</p>
    
        <div className='flex flex-col gap-1'> 

          <div className='flex items-center gap-2'>
            <GiMoneyStack className='text-[green]' size={20}/>
            <p className='text-sm'>{startup?.AmountInUSD}</p>
          </div>

          <div className='flex items-center gap-2'>
            <BsCalendarDateFill/>
            <p className='text-sm'>{startup.Date}</p>
          </div>

          <div className='flex items-center gap-2'>
            <FaLocationDot/>
            <p className='text-sm'>{startup.CityLocation}</p>
          </div>

        </div> 

      </div>

      <StartupModal startup={startup} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}/>
    
    </>
    
  )
}

export default Startup;