import manwithcard from "./images/manwithcard.jpg";
const Boostrate = () => {
    return (
        <div className="bg-[#FBFBFB] py-8">
            <div className="flex flex-wrap px-7 md:px-7 py-3 justify-evenly items-center">
                <div className="w-full md:w-[37%] h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden">
                    <img src={manwithcard} alt="payment options" className="w-full h-full rounded-xl" />
                </div>
                <div className="pt-5 md:w-[50%]">
                    <h3 className="text-4xl font-bold">Boost approval rates </h3>
                    <p className="pt-4 tracking-wider text-lg">Optimize your backend payments setup with granular, clean messaging and the right payment rails, so you can help boost approval chances and capture more of your hard-earned revenue. </p>
                </div>
            </div>
            <div className="flex flex-wrap px-7 md:px-5 lg:px-8 pt-4 lg:py-10 justify-around lg:justify-evenly items-start">
                <div className="md:w-[40%] lg:w-1/5 md:pt-3">
                    <h3 className="text-xl font-bold">Keep data fresh </h3>
                    <p className="tracking-wider py-3">Use Account Updater to securely make batch and real-time updates for Visa, Mastercard, and Discover. </p>
                </div>
                <div className="md:w-[40%] lg:w-1/5 pt-3">
                    <h3 className="text-xl font-bold">Adopt network tokenization</h3>
                    <p className="tracking-wider py-3">Boost security and approvals with a partner who has already tokenized hundreds of millions of credit cards.</p>
                </div>
                <div className="md:w-[40%] lg:w-1/5 pt-3">
                    <h3 className="text-xl font-bold">Retry failed transactions </h3>
                    <p className="tracking-wider py-3">We strive to optimize approvals right from the start. But if they fail, we can retry the transaction on alternative acquiring networks.</p>
                </div>
                <div className="md:w-[40%] lg:w-1/5 pt-3">
                    <h3 className="text-xl font-bold">Optimize routing</h3>
                    <p className="tracking-wider py-3">Route transactions to global acquirers and networks that will yield the fastest, most reliable, and least expensive transaction.</p>
                </div>
            </div>

        </div>
    );
}

export default Boostrate;