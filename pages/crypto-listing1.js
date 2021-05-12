const CryptoList = () => {
    return ( 
        <>
        <div className="grid grid-flow-col grid-col-10 gap-1 px-4 my-4">
                    <span className=""># Name</span>
                    <span>Price</span>
                    <span>24h %</span>
                    <span>7d %</span>
                    <span>Market Cap</span>
                    <span>Voulume(24h)</span>
                    <span>Circulating Supply</span>
                    <span>Last 7 days</span>
                    <span>YTD %</span>
        </div>
                    <hr/>
         <div className="grid grid-flow-col grid-col-10 gap-1 px-4 my-4">
             <div className="flex items-center col-span-2">
                <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                <strong className="text-gray-400 font-xs ml-4">1</strong>
             </div>
            <div className="flex items-center -ml-14 justify-around">
                <span className="text-black font-bold">Bitcoin</span>
                <span className="-ml-4 text-gray-400 font-medium">BTC</span>
                <span className="px-1 -ml-2 bg-gray-300 text-black font-bold text-sm rounded-md">Buy</span>
            </div>
            <span className="text-black font-bold">$58,732.77</span>
            <div className="flex items-center">
                <i className="fas fa-caret-up"></i>
                <span className="text-green-400 font-bold ml-2">0.96%</span>
            </div>
            <span className="text-green-400 font-bold">1.36%</span>
            <span className="text-black font-bold">$1,099,168,125,758</span>
            <div className="block">
                <strong className="text-black font-bold">$64,835,839,882</strong>
                {/* <span className="text-gray-400 font-semibold">1,103,371 BTC</span> */}
            </div>
            <span className="text-black font-bold">18,705,550 BTC</span>
            <span>Last 7 days</span>
            <span className="text-green-400 font-bold">100.05%</span>
        </div>
            <hr/>
        
   </>
     );
}
 
export default CryptoList;