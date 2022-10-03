import React from 'react';
import Link from '../Link/Link';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

const Navbar = () => {
     const [open, setOpen] = useState(false)

     const routes = [
          {id: 1, name: 'home', path: '/home'},
          {id: 2, name: 'products', path: '/home'},
          {id: 3, name: 'orders', path: '/home'},
          {id: 4, name: 'Contact', path: '/home'},
          {id: 5, name: 'About', path: '/home'},
     ]


     return (
          <nav className='bg-purple-200 w-full'>
             <div onClick={() => setOpen(!open)}  className="h-6 w-6 md:hidden">
               {
                    open ? <XMarkIcon/> : <Bars4Icon/>
               }
             </div>
               <ul className={`bg-purple-200 md:flex w-full justify-center absolute md:static duration-100 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>                   
                    {
                         routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
               </ul>
          </nav>
     );
};

export default Navbar;