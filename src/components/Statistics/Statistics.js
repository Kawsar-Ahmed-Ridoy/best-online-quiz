import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  } from 'recharts';

const Statistics = () => {

  const data = [
    {
      name: 'React',
      Past: 0,
      Present: 2400,
    },
    {
      name: 'JavaScript',
      Past: 1000,
      Present: 3980,
    },
    {
      name: 'CSS',
      Past: 4000,
      Present: 8800,
    },
    {
      name: 'Git',
      Past: 2780,
      Present: 3908,
    }
  ];
     return (
      <div className='container w-100 mt-5'>
        
         <LineChart className='mx-auto' 
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Present" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Past" stroke="#82ca9d" />
        </LineChart>

      </div>
  );
  }

export default Statistics;