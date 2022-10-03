import React from 'react';
import { CheckCircleIcon} from '@heroicons/react/24/solid'
const Feature = ({featur}) => {
     return (
          <div>
                  <div className='flex items-center'>
                    <CheckCircleIcon className='h-6 w-4 text-green-300'/>
                    <p className='ml-2'>{featur}</p>
               </div>
          </div>
     );
};

export default Feature;