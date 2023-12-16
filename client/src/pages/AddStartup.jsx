import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateStartupForm } from '../utils/validateStartupForm';
import { toast } from 'react-toastify';

const AddStartup = () => {

    const [formData, setFormData] = useState({

        startupName: '',
        date: '',
        industryVertical: '',
        subVertical: '',
        cityLocation: '',
        investorsName: '',
        investmentType: '',
        funding: ''

    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name] : e.target.value
            }
        })
    }


    const handleSubmit = async (e) =>  {


        e.preventDefault();
        const newError = validateStartupForm(formData);
        if(Object.keys(newError).length > 0) {
            setErrors(newError);
            return;
        }

        try {

            const res = await fetch('http://localhost:8000/api/startup/addStartup', {
                headers: {    
                    'Content-Type': 'application/json'
                  },
                  method: "POST",
                  body: JSON.stringify(formData)
            });

            const data = await res.json();
            
            if(!res.ok) {
                throw new Error(data.message);
            }

            toast.success("Startup added successfully!", {
                position: "top-center",
                autoClose: 1200
            });
            navigate('/');

        } catch(e) {
            toast.error(`${e}`, {
                position: "top-center",
                autoClose: 1200
            });
            console.log(e);
        }

    }

  return (

    <>
        <div className="bg-white p-4 rounded max-w-6xl m-auto">
                    
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">Add a Startup</p>

                <form className='flex flex-col gap-4 w-[80%] mx-auto' onSubmit={handleSubmit}>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='startupName'>Startup Name</label>
                        <input 
                            type="text"
                            placeholder='Startup Name'
                            name='startupName'
                            id='startupName'
                            value={formData.startupName}
                            onChange={handleChange}
                            className={`h-8 sm:h-10 border-2 px-2 ${errors.startupName ? 'border-red-500' : ''}`}
                        />
                        {errors.startupName && <span className="text-red-500 text-sm mt-1">{errors.startupName}</span>}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='date'>Launched in</label>
                        <input 
                            type="date"
                            placeholder='Launched in'
                            name='date'
                            id='date'
                            value={formData.date}
                            onChange={handleChange}
                            className={`h-8 sm:h-10 border-2 px-2 xs:w-[50%] sm:w-[30%] md:w-[25%] lg:w-[20%] ${errors.date ? 'border-red-500' : ''}`}
                        />
                        {errors.date && <span className="text-red-500 text-sm mt-1">{errors.date}</span>}
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='funding'>Funding</label>
                        <input 
                            type="number"
                            placeholder='Funding'
                            name='funding'
                            id='funding'
                            min='0'
                            value={formData.funding}
                            onChange={handleChange}
                            className={`h-8 sm:h-10 border-2 px-2 xs:w-[50%] sm:w-[30%] md:w-[25%] lg:w-[20%] ${errors.funding ? 'border-red-500' : ''}`}
                        />
                        {errors.funding && <span className="text-red-500 text-sm mt-1">{errors.funding}</span>}
                    </div>
                            
                    <div className='flex flex-col gap-2'>

                        <label htmlFor='industryVertical'>Industry Vertical</label>
                        <input 
                            type="text"
                            placeholder='Industry Vertical'
                            name='industryVertical'
                            id='industryVertical'
                            value={formData.industryVertical}
                            onChange={handleChange}
                            className={`h-8 sm:h-10 border-2 px-2 ${errors.industryVertical ? 'border-red-500' : ''}`}
                        />
                        {errors.industryVertical && <span className="text-red-500 text-sm mt-1">{errors.industryVertical}</span>}

                    </div>
                            
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='subVertical'>Sub Vertical</label>
                        <input 
                            type="text"
                            placeholder='Sub Vertical'
                            name='subVertical'
                            id='subVertical'
                            value={formData.subVertical}
                            onChange={handleChange}
                            className={`h-8 sm:h-10 border-2 px-2 ${errors.subVertical ? 'border-red-500' : ''}`}
                        />
                        {errors.subVertical && <span className="text-red-500 text-sm mt-1">{errors.subVertical}</span>}
                    </div>
                            
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="cityLocation">Location</label>
                        <input 
                            type="text"
                            placeholder='Location'
                            name='cityLocation'
                            id='cityLocation'
                            value={formData.cityLocation}
                            onChange={handleChange}
                            className={`h-8 sm:h-10 border-2 px-2 ${errors.cityLocation ? 'border-red-500' : ''}`}
                        />
                        {errors.cityLocation && <span className="text-red-500 text-sm mt-1">{errors.cityLocation}</span>}
                    </div>
                            
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="investorsName">Investors Name</label>
                        <input 
                            type="text"
                            placeholder='Investors Name'
                            name='investorsName'
                            id='investorsName'
                            value={formData.investorsName}
                            onChange={handleChange}
                            className={`h-8 sm:h-10 border-2 px-2 ${errors.investorsName ? 'border-red-500' : ''}`}
                        />
                        {errors.investorsName && <span className="text-red-500 text-sm mt-1">{errors.investorsName}</span>}
                    </div>
                            
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='investmentType'>Investment Type</label>
                        <input 
                            type="text"
                            placeholder='Investment Type'
                            name='investmentType'
                            id='investmentType'
                            value={formData.investmentType}
                            onChange={handleChange}
                            className={`h-8 sm:h-10 border-2 px-2 ${errors.investmentType ? 'border-red-500' : ''}`}
                        />
                        {errors.investmentType && <span className="text-red-500 text-sm mt-1">{errors.investmentType}</span>}
                    </div>

                    <div className='flex justify-center w-full mx-auto gap-10 mt-4'>
                        <button className=" border-2 h-8 sm:h-10 border-black hover:border-[#4083a9] w-20  px-2 py-1 sm:px-4 sm:py-2 rounded-md mt-3" onClick={() => {navigate(-1)}}>
                            Cancel
                        </button>
                        
                                
                        <button className="bg-[#3f67ff]  h-8 sm:h-10 w-20 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md mt-3">
                            Submit
                        </button>

                    </div>
                            
                </form>
                        
        </div>   
    </>
    
  )
}

export default AddStartup;