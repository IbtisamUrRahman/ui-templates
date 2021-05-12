const CryptoListing = () => {
    return ( 
        <>
        <div className="bg-white antialiased">
            <div className="grid grid-rows-1 grid-flow-col gap-1 mx-auto container px-5 ml-9">
                    <span># Name</span>
                    <span>Price</span>
                    <span>24h %</span>
                    <span>7d %</span>
                    <span>Market Cap</span>
                    <span>Voulume(24h)</span>
                    <span>Circulating Supply</span>
                    <span>Last 7 days</span>
                    <span>YTD %</span>
            </div>
            <div className="grid grid-rows-1 grid-flow-col grid-col-10 gap-2 px-4">
                    <strong className="text-gray-400 font-xs">1</strong>
                    <div className="flex items-center -ml-14 justify-around">
                        <span>Bitcoin</span>
                        <span className="-ml-4 text-gray-400 font-medium">BTC</span>
                        <span className="px-1 -ml-2 bg-gray-300 text-black font-bold text-sm rounded-md">Buy</span>
                    </div>
                    <span>$58,732.77</span>
                    <span>0.96%</span>
                    <span>1.36%</span>
                    <span>$1,099,168,125,758</span>
                    <div className="">
                        <strong>$64,835,839,882</strong>
                        <span>1,103,371 BTC</span>
                    </div>
                    <span>18,705,550 BTC</span>
                    <span>Last 7 days</span>
                    <span>100.05%</span>
            </div>
            
        </div>
        </>
     );
}
 
export default CryptoListing;