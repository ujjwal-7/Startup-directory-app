import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Startup from '../components/Startup';
import Pagination from '../components/Pagination';
import Spinner from '../components/Spinner';

const SearchPage = () => {

    const [startups, setStartups] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const { searchQuery } = useParams();
    console.log(searchQuery);

    useEffect(() => {

        fetchData();
    }, [searchQuery, page]);

    const fetchData = async () => {

        try {

            setLoading(true);
            const res = await fetch(`http://localhost:8000/api/startup/search?searchQuery=${searchQuery}&page=${page}`);
            const data = await res.json();

            setLoading(false);
            if(!res.ok) {
                throw new Error();
            }
            console.log(data);
            setStartups(data?.startups);
            setTotalPages(data?.totalPages);
            setLoading(false);

        } catch(e) {
            console.log(e);
        }
    }

  return (

    <>
        {
            loading ? (<Spinner />) : (
                
                 startups.length > 0 ?  (
                 
                    <div className=' bg-[#ffffff] p-4 max-w-6xl m-auto min-h-[90vh]'>
        
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                
                            {
                                startups.map((startup, index) => (
                                    <Startup key={index} startup={startup} />
                                ))
                            }  
                        </div>

                        <Pagination page = {page} totalPages = {totalPages} setPage={setPage}/>
        
                    </div>) : (

                    <div className='flex justify-center items-center min-h-[80vh]'>
                        <p className='text-xl xs:text-2xl sm:text-3xl font-bold'>Sorry, No Results Found!</p>
                    </div>
                )
                
            )
        }

    </>
    
  )
}

export default SearchPage;