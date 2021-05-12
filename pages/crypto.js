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

  const features = [
    {
      number: '1',  
      name: 'Bitcoin',
      price: '$58,732.77',
      hour: '0.96 %',
      day: '1.36 %',
      market: '$1,099,168,125,758',
      voulume: '$64,835,839,882',
      supply: '18,705,550 BTC',
      status: '460.05%',
    },
    {
        number: '2',  
        name: 'Ethereum',
        price: '$58,751',
        hour: '3.32 %',
        day: '32.36 %',
        market: '$41,099,168,125,758',
        voulume: '$53,835,839,882',
        supply: '18,705,550 BTC',
        status: '100.05%',
      },
      {
        number: '3',  
        name: 'Binance Coin',
        price: '$685.20',
        hour: '6.00 %',
        day: '32.36 %',
        market: '$41,099,168,125,758',
        voulume: '$53,835,839,882',
        supply: '18,705,550 BTC',
        status: '1700.05%',
      },
      {
        number: '4',  
        name: 'Dogecoin',
        price: '$0.58751',
        hour: '5.25 %',
        day: '32.36 %',
        market: '$41,099,168,125,758',
        voulume: '$23,835,975,12',
        supply: '18,705,550 BTC',
        status: '9621%',
      },
      {
        number: '5',  
        name: 'Cardano',
        price: '$1.80',
        hour: '5.32 %',
        day: '33.98 %',
        market: '$57,099,168,125,190',
        voulume: '$53,835,839,882',
        supply: '18,705,550 BTC',
        status: '925.85%',
      },
      {
        number: '6',  
        name: 'XRP',
        price: '$1.58',
        hour: '4.96 %',
        day: '1.01 %',
        market: '$41,099,168,125,758',
        voulume: '$53,835,839,882',
        supply: '18,705,550 BTC',
        status: '568.05%',
      },
      {
        number: '7',  
        name: 'Tether',
        price: '$1.00',
        hour: '0.01 %',
        day: '0 %',
        market: '$41,099,168,125,979',
        voulume: '$53,835,839,820',
        supply: '18,705,550 BTC',
        status: '0.05%',
      },
      {
        number: '8',  
        name: 'Polkadots',
        price: '$41.58',
        hour: '5.06 %',
        day: '9.28 %',
        market: '$41,099,168,125,758',
        voulume: '$53,835,839,882',
        supply: '18,705,550 BTC',
        status: '396.05%',
      },
      {
        number: '9',  
        name: 'Bitcoin cash',
        price: '$156.58',
        hour: '4.96 %',
        day: '51.01 %',
        market: '$41,099,168,125,758',
        voulume: '$53,835,839,882',
        supply: '18,705,550 BTC',
        status: '343.05%',
      },
      {
        number: '10',  
        name: 'Litecoin',
        price: '$398.58',
        hour: '4.96 %',
        day: '1.01 %',
        market: '$41,099,168,125,758',
        voulume: '$53,835,839,882',
        supply: '18,705,550 BTC',
        status: '216.05%',
      },
]

const Crypto = () => {
    return ( 
        <>
        <div className="grid grid-cols-10 auto-cols-max gap-x-2 gap-y-5 container mx-auto">
            {Navigation.map((item) => (
                <>
                 <span className="flex justify-end">{item.name}</span>
                </>
            ))}

                {features.map((item) => (
             <>
                 <div className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                    <strong className="text-gray-400 font-xs ml-4">{item.number}</strong>
                 </div>
              <div className="flex items-center justify-start">
                  <span className="text-black font-bold pr-2">{item.name}</span>
                  <span className=" text-gray-400 font-medium -ml-3 p-2">BTC</span>
                  <span className="px-1 -ml-2 bg-gray-300 text-black font-bold text-sm rounded-md flex justify-end">Buy</span>
              </div>
              <span className="text-black font-bold flex justify-end">{item.price}</span>
              <div className="flex items-center justify-end">
                <svg className="h-4 w-4 text-green-400" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
                <span className="text-green-400 font-bold ml-2">{item.hour}</span>
            </div>
            <div className="flex items-center justify-end">
                 <svg className="h-4 w-4 text-green-400" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
                <span className="text-green-400 font-bold">{item.day}</span>
            </div>
            <span className="text-black font-bold flex justify-end">{item.market}</span>
            <div className="block">
                <strong className="text-black font-bold flex justify-end">{item.voulume}</strong>
            </div>    
            <span className="text-black font-bold flex justify-end">{item.supply}</span>
            <span className="flex justify-end">{item.imageUrl}</span>
            <div className="flex items-center justify-between">
                <div className="flex items-center ml-4">
                     <svg className="h-4 w-4 text-green-400" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
                      <span className="text-green-400 font-bold">{item.status}</span>
                </div>
            <svg className="h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </div>
             </>

                ))}

                {/* <div className="flex items-center">
                <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                <strong className="text-gray-400 font-xs ml-4">1</strong>
             </div>
            <div className="flex items-center justify-around">
                <span className="text-black font-bold -ml-2">Bitcoin</span>
                <span className=" text-gray-400 font-medium -ml-3">BTC</span>
                <span className="px-1 -ml-2 bg-gray-300 text-black font-bold text-sm rounded-md">Buy</span>
            </div>
            <span className="text-black font-bold flex justify-end">$58,732.77</span>
            <div className="flex items-center justify-end">
                <svg className="h-4 w-4 text-green-400" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
                <span className="text-green-400 font-bold ml-2">0.96%</span>
            </div>
            <div className="flex items-center justify-end">
                 <svg className="h-4 w-4 text-green-400" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
                <span className="text-green-400 font-bold">1.36%</span>
            </div>
            <span className="text-black font-bold flex justify-end">$1,099,168,125,758</span>
            <div className="block">
                <strong className="text-black font-bold flex justify-end">$64,835,839,882</strong>
                {/* <span className="text-gray-400 font-semibold">1,103,371 BTC</span> */}
            {/* </div>
            <span className="text-black font-bold flex justify-end">18,705,550 BTC</span>
            <span className="flex justify-end">Last 7 days</span>
            <div className="flex items-center justify-between">
                <div className="flex items-center ml-4">
                     <svg className="h-4 w-4 text-green-400" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
                      <span className="text-green-400 font-bold">100.05%</span>
                </div>
            <svg className="h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
            </div> */} 
        </div>
        </>
     );
}
 
export default Crypto;