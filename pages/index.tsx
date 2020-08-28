
import React, { useEffect, useState } from 'react';
import network from '../utils/network';

const HomePage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      const res = await network.getSeaData();

      setData(res);
    }

    getData();
  }, []);

  console.log(data);


  return <div>Welcome to Next.js!</div>
}

export default HomePage
