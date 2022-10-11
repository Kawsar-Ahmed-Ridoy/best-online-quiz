import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Items from '../Items/Items';

const Home = () => {
    const items = useLoaderData();
    const {data} = items;
    return (
        <div className='container'>
            <Header></Header>
            <div style={{left: "50%"}} className='d-flex flex-wrap gap-4 justify-content-between justify-content-sm-center '>
              {
                data.map(item => 
                    <Items
                key={item.id}
                item={item}
                ></Items>
                  )
            }  
            </div>
            
        </div>
    );
};

export default Home;