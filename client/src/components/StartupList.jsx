import React, { useEffect, useState } from 'react';
import Startup from './Startup';
import Pagination from './Pagination';

const StartupList = () => {

  const [startups, setStartups] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("All");


  useEffect(() => {
    fetchData();
  }, [page, selectedFilter]);

  const fetchData = async () => {

    try {
      const res = await fetch(`https://startup-directory-app.vercel.app/api/startup/allStartups?page=${page}&filter=${selectedFilter}`);
      const data = await res.json();
      setStartups(data?.startups);
      setTotalPages(data?.totalPages);

    } catch(e) {
      console.log(e);
    }
  
  }

  const handleFilterChange = (e) => {

    setSelectedFilter(e.target.value);
    setPage(1);
  }

  const filters = ['All', 'Technology', 'Ecommerce', 'Logistics', 'Healthcare', 'Food & Beverages', 'Finance', 'Education', 'Real Estate', 'FMCG', 'Consumer Internet', 'Others'];

  return (
    <div className=' bg-[#ffffff] p-4'>
        <div className='flex flex-row-reverse gap-2 items-center p-2'>
          
          <select name="filters" id="filters" className='border-2 border-black' value={selectedFilter} onChange={handleFilterChange}>
            {
              filters.map((item, i) => {
                return <option key={i} value={item}>{item}</option>
              })
            }

          </select>
          <p className='text-lg'>Industry:</p>
         
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            
        {
          startups.map((startup, index) => (
            <Startup key={index} startup={startup} />
          ))
        }
            
           
        </div>

        <Pagination page = {page} totalPages = {totalPages} setPage={setPage}/>
        
        
    </div>
  )
}

export default StartupList;