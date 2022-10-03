import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BarChart } from 'recharts';
import { Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phone = () => {
     const [phones, setphonesLoaded] = useState([])



     useEffect(()=>{
          axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
          .then(data => { console.log(data)
               
          const phonesLoaded = data.data.data;
          console.log(phonesLoaded)
          const phoneData = phonesLoaded.map(phone => {
               const parts = phone.slug.split('-');
               const price = parseInt(parts[1]);
               const singlephone = {
                    name: phone.phone_name,
                    price: price
               } 
               return singlephone;
               
          })
          // console.log(phoneData);
          setphonesLoaded(phoneData);
          console.log(phoneData)
     })

     },[])
   

     return (
          <div>
               
        <BarChart width={500} height={200} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip></Tooltip>
        </BarChart>
               
          </div>
     );
};

export default Phone;