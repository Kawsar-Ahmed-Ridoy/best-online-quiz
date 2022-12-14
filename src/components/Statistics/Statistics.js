import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,  } from 'recharts';

const Statistics = () => {
const clickData = useLoaderData();
const {data} = clickData;
 
     return (
      <div style={{height:'60vh', width:"100%"}} className="mt-5 container">
        <ResponsiveContainer className='' width="100%" height="100%">
          <LineChart className='mx-auto' 
 
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
          <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
       </ResponsiveContainer>
       </div>
       
       


  );
  }

export default Statistics;