const PaypalInfo=()=>{

    return(
        <div className="w-full flex flex-wrap md:px-3 my-10 md:justify-around lg:justify-evenly items-center">
            <div className="md:w-[40%] lg:w-1/3 px-7 md:p-4">
                <h3 className="text-8xl font-bold text-[#043087]">401%</h3>
                <p className="text-black font-medium tracking-wider text-2xl py-7">ROI for the composite merchant<sup>1</sup>, estimated by Forrester with PayPal enterprice payment solutions<sup>2</sup></p>
            </div>
            <div className="md:w-[45%] lg:w-[53%]  md:p-8 md:border-s-2">
               <div className="px-7 md:p-7 border-b-2">
                <h4 className="text-[#043087] font-bold text-4xl">86%</h4>
                <p className="py-3 tracking-wider text-lg">of our enterprise users indicate that we had a positive Impact on authorization rates since adoption<sup>3</sup></p>
               </div>
               <div className="px-7 py-3 md:p-7">
                <h4 className="text-[#043087] font-bold text-4xl">4 bps</h4>
                <p className="py-3 tracking-wider text-lg">In the US, Braintree can help reduce chargeback rate by 4bps<sup>4</sup></p>
               </div>
            </div>
        </div>
    );
}

export default PaypalInfo;