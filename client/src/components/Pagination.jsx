import React from 'react';

const Pagination = ({page, totalPages, setPage}) => {

    const handlePreviousClick = () => {

        if(page >= 2) {
            setPage((page) => page - 1);
        }
    }

    const handleNextClick = () => {

        if(page < totalPages) {
            setPage((page) => page + 1);
        }
    }

  return (
    <div className='flex mt-6 justify-center gap-4'>
        <button className={`h-10 w-16 bg-[#3f67ff] text-white p-2 rounded-md  ${page < 2 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} onClick={handlePreviousClick}>Prev</button>

        <div className='h-10 w-20 border-2 text-center p-1 border-[#4083a9] rounded-sm'>
            <p className='font-semibold'>{page} / {totalPages}</p>
        </div>

        <button className={`h-10 w-16 bg-[#3f67ff] text-white p-2 rounded-md  ${page >= totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`} onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default Pagination;