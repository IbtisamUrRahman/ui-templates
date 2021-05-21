import React from 'react';
import {useState} from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Pagination from './Pagination';

const Navigation = [
    { name: '#',  },
    { name: 'Name',  },
    { name: 'Price',  },
    { name: '24h %',  },
    { name: '7d %',  },
    { name: 'Market Cap',  },
    { name: 'Voulume (24h)',  },
    { name: 'Circulating supply',  },
    { name: 'Last 7 days',  },
    { name: 'YTD',  },
  ]

  const featuresData = [
    {
      number: '1',  
      name: 'Bitcoin',
      price: '$58,732.77',
      hour: '0.96 %',
      day: '1.36 %',
      market: '$1,099,168,125,758',
      voulume: '$64,835,839,882',
      supply: '18,705,678,550 BTC',
      status: '460.05%',
      open: false
    },
    {
        number: '2',  
        name: 'Ethereum',
        price: '$58,751',
        hour: '3.32 %',
        day: '32.36 %',
        market: '$41,099,758',
        voulume: '$53,835,839,882',
        supply: '918,705,550,000 BTC',
        status: '100.05%',
        open: false
      },
      {
        number: '3',  
        name: 'Binance Coin',
        price: '$685.20',
        hour: '6.00 %',
        day: '32.36 %',
        market: '$99,168,125,758',
        voulume: '$53,835,839,882',
        supply: '18,705,550 BTC',
        status: '1700.05%',
        open: false
      },
      {
        number: '4',  
        name: 'Dogecoin',
        price: '$0.58751',
        hour: '5.25 %',
        day: '32.36 %',
        market: '$41,099,168,125,758',
        voulume: '$23,835,975,12',
        supply: '467,705,550 BTC',
        status: '96.21%',
        open: false
      },
      {
        number: '5',  
        name: 'Cardano',
        price: '$1.80',
        hour: '5.32 %',
        day: '33.98 %',
        market: '$7,099,168,125,190',
        voulume: '$53,835,839,882',
        supply: '18,705,550 BTC',
        status: '925.85%',
        open: false
      },
      {
        number: '6',  
        name: 'XRP',
        price: '$1.58',
        hour: '4.96 %',
        day: '1.01 %',
        market: '$41,099,168,125,758',
        voulume: '$53,835,839,882',
        supply: '18,550 BTC',
        status: '568.05%',
        open: false
      },
      {
        number: '7',  
        name: 'Tether',
        price: '$1.00',
        hour: '0.01 %',
        day: '0 %',
        market: '$41,125,979',
        voulume: '$53,835,839,820',
        supply: '18,705,550,200 BTC',
        status: '0.05%',
        open: false
      },
      {
        number: '8',  
        name: 'Polkadots',
        price: '$41.58',
        hour: '5.06 %',
        day: '9.28 %',
        market: '$168,125,758',
        voulume: '$53,835,839,882',
        supply: '18,705,550 BTC',
        status: '396.05%',
        open: false
      },
      {
        number: '9',  
        name: 'Bitcoin cash',
        price: '$156.58',
        hour: '4.96 %',
        day: '51.01 %',
        market: '$41,099,125,758',
        voulume: '$53,835,839,882',
        supply: '18,705,550 BTC',
        status: '343.05%',
        open: false
      },
      {
        number: '10',  
        name: 'Litecoin',
        price: '$398.58',
        hour: '4.96 %',
        day: '1.01 %',
        market: '$41,099,168,124',
        voulume: '$53,835,839,882',
        supply: '18,705,333,44,550 BTC',
        status: '216.05%',
        open: false
      }
]
const dropDown = [
    { name: 'Charts',  },
    { name: 'Markets',  },
    { name: 'Historical Data',  },
  ]
  const cryptoTable = () => {
      const [features, setFeatures] = useState([]);
      const onDropdownOpen = (i) => {
          let tempFeatures = features
          tempFeatures[i].open = true
          setFeatures(tempFeatures)
      }
      console.log(features)
    return (
        <>
        <table className="table-auto">
            <thead  >
                <tr className="border-b border-gray-100 ">
            {Navigation.map((item) => (
              <>
                    <th className="">
                        <div className="flex justify-end px-12 py-6"> {item.name} </div>
                    </th>
                    <th className="">
                      <div className="flex justify-end px-12 py-6"> {item.name} </div>
                     </th>
                     <th className="">
                        <div className="flex justify-end px-12 py-6"> {item.name} </div>
                    </th>
                    <th className="">
                        <div className="flex justify-end px-12 py-6"> {item.name} </div>
                    </th>
                    <th className="">
                        <div className="flex justify-end px-12 py-6"> {item.name} </div>
                    </th>
                    <th className="">
                        <div className="flex justify-end px-12 py-6"> {item.name} </div>
                    </th>
                    <th className="">
                        <div className="flex justify-end px-12 py-6"> {item.name} </div>
                    </th>
                    <th className="">
                        <div className="flex justify-end px-12 py-6"> {item.name} </div>
                    </th>
                    <th className="">
                        <div className="flex justify-end px-12 py-6"> {item.name} </div>
                    </th>
                    <th className="">
                        <div className="flex justify-end px-12 py-6"> {item.name} </div>
                    </th>
              </>
              ))}
               </tr>
            </thead>
            <tbody >
                    {features.map((item, i) => (
                <tr>
                    
                    <td className="py-6 px-3 border-b border-gray-100">
                        <div className="flex items-center">
                        <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                        <strong className="text-gray-400 font-xs ml-4">{item.number}</strong>
                        </div>
                    </td>
                    <td className=" border-b border-gray-100">
                        
                         <span className="text-black font-semibold pr-2">{item.name}</span>
                         <span className=" text-gray-400 font-medium pr-3">BTC</span>
                         <span className="px-1  bg-gray-300 text-black font-semibold text-sm rounded-md">Buy</span>
                
                    </td>
                    
                         <td className="border-b border-gray-100">
                              <div className="text-black font-semibold flex justify-end py-6">{item.price}</div> 
                         </td>
    
                    <td className=" border-b border-gray-100">
                      <div className="flex items-center justify-end">
                        <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" /></svg>
                        <span className="text-green-400 font-semibold ml-2">{item.hour}</span>
                      </div>
                    </td>
                    <td className=" border-b border-gray-100">
                      <div className="flex items-center justify-end">
                      <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" /></svg>
                        <span className="text-green-400 font-semibold">{item.day}</span>
                      </div>
                    </td>
                    <td className=" border-b border-gray-100">
                        <div className="text-black font-semibold ml-4 flex justify-end py-6">
                             {item.market}
                        </div>
                    </td>
                    <td className=" border-b border-gray-100">
                        <div className="block">
                        <strong className="text-black font-semibold flex justify-end">{item.voulume}</strong>
                        </div> 
                    </td>
                    <td className=" border-b border-gray-100">
                        <div className="-ml-4">
                             <span className="text-black font-semibold flex justify-end ">{item.supply}</span>
                        </div>
                    </td>
                    <td className=" border-b border-gray-100">
                    <Sparklines data={[5, 10, 5, 20]}> <SparklinesLine color="blue" /></Sparklines>
                    </td>
                    
                    <td className=" border-b border-gray-100">
                    <div className="flex items-center justify-between">
                         <div className="flex items-center ml-4">
                         <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" /></svg>
                          <span className="text-green-400 font-semibold">{item.status}</span>
                    </div>
                    <button className="block h-6 w-6 rounded-full focus:outline-none ">
                        <svg className="h-full w-full text-black hover:text-gray-700 outline-none " onClick={() => onDropdownOpen(i)} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
                    </button>
                    </div>
                     {item.open ?  
                    <div className="bg-white w-48 rounded-md shadow-lg mr-4 absolute right-8">
                        {dropDown.map((item) => (
                        <a className="block px-4 py-2 font-semibold cursor-pointer">View {item.name}</a>
                        ))}
                    </div>
                        : false}
                    </td>
                
                </tr>
                     ))}
            </tbody>
        </table>
        
        <Pagination/>
        </>
    );
}

export default cryptoTable;