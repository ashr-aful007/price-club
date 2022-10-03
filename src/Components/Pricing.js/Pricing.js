import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
          const pricingOptions = [
               {id: 1, name: 'free', price: 0, featurs: [
                    'Awsome Feature',
                    'Extra  Feature',
                    'Unnecessary Feature',
                    'Will never use Feature',
                    'Hudai feature',
                    'Ajaira Feature'
               ]},
               {id: 2, name: 'Medium', price: 100,
               featurs: [
                    'Awsome Feature',
                    'Extra  Feature',
                    'Unnecessary Feature',
                    'Will never use Feature',
                    'Hudai feature',
                    'Ajaira Feature'
               ]},
               {id: 3, name: 'Premium', price: 9.99,featurs: [
                    'Awsome Feature',
                    'Extra  Feature',
                    'Unnecessary Feature',
                    'Will never use Feature',
                    'Hudai feature',
                    'Ajaira Feature'
               ]},
               {id: 4, name: 'golden', price: 19.99,featurs: [
                    'Awsome Feature',
                    'Extra  Feature',
                    'Unnecessary Feature',
                    'Will never use Feature',
                    'Hudai feature',
                    'Ajaira Feature'
               ]},
          ]

     return (
          <div>
               <h2 className='text-5xl font-bold bg-indigo-400 p-12 text-white'>Best Deal of the Town</h2>
             <div className='grid  md:grid-cols-4 gap-3 mt-4'>
             {
                    pricingOptions.map(option => <PriceOption
                    key={option.id}
                    option = {option}

                    >
                    </PriceOption>)
               }
             </div>
          </div>
     );
};

export default Pricing;