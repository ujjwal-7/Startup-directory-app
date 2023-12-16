import React from 'react'

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
        <div className="border-t-4 border-[#3f67ff] border-solid rounded-full animate-spin w-12 h-12"></div>
    </div>
    
  )
}

export default Spinner;