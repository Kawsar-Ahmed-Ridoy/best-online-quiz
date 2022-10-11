import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Items from '../Items/Items';

const Home = () => {
    const items = useLoaderData();
    return (
        <div className='container'>
            <Header></Header>
            <div className='d-flex flex-wrap gap-4 justify-content-between '>
              {
                items.data.map(item => 
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