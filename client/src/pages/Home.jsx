import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import StartupList from '../components/StartupList';
import Spinner from '../components/Spinner';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (

    <>
      {
        loading ? (<Spinner />) : (
          <div className=' max-w-6xl m-auto'>
            <Banner />
            <StartupList />
          </div>
        )
      }
    </>
  )
}

export default Home;