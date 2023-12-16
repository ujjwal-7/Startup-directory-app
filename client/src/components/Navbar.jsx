import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();


    const handleSearchQuery = (e) => {

        if((e?.key === "Enter" || e === "search") && searchQuery.length > 0) {
            navigate(`/search/${searchQuery}`);
        }
    }

  return (

    <>
        <div className='sticky top-0 h-16 bg-[#ffffff] shadow-md'>
            <div className='flex justify-between items-center h-full p-2 max-w-6xl m-auto'>
                <Link to='/'>
                    <p className='text-[#3f67ff] text-lg font-bold hover:cursor-pointer'>List It</p>
                </Link>
                
                <div className='flex items-center h-8 w-36 xs:w-44 sm:w-64 md:w-72 lg:w-[400px] border-2 hover:border-[#4083a9] rounded-full banner divide-x hover:divide-[#4083a9]'>
                    <input 
                        type='text'
                        placeholder='Search startups'
                        className='text-sm xs:text-base w-full h-full px-2 bg-[#f1f4ff] outline-none rounded-l-full'
                        value={searchQuery}
                        onChange={(e) => {setSearchQuery(e.target.value)}}
                        onKeyUp={handleSearchQuery}
                    />
                    <button onClick={() => handleSearchQuery("search")}><IoIosSearch size={24}/></button>
                </div>
                
                <Link to='/addStartup'>
                    <div className=' h-8 sm:h-10 text-sm sm:text-base w-14 sm:w-20 bg-[#3f67ff] rounded-full p-1 sm:p-2 hover:cursor-pointer'>
                        <p className='text-[#ffffff] text-center'>Add</p>
                    </div>
                </Link>
            </div>
        </div>
    </>

  )
}

export default Navbar;