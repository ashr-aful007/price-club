import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
     const {featurs} = option;
     return (
          <div className=''>
               <div className='bg-indigo-300 m-3 rounded-md p-3'>
                    <h3><span className='text-5xl font-semibold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-200'>/mon</span>
                    </h3>
                    <p className='text-3xl my-4'>{option.name}</p>     
                    {
                    featurs.map((featur, idx) => <Feature key={idx} featur= {featur}></Feature>)
                    }   
                    <button className='bg-green-500 mt-4 w-full rounded-md py-2 font-bold text-white'>Bay Now</button>        
               </div>

          </div>
     );
};

export default PriceOption;