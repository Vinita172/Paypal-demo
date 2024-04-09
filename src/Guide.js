import { faArrowRightLong, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Guide = () => {
    return (
        <>
            <div className="mx-7 md:px-0 md:mx-5 py-5 md:py-10 flex flex-wrap justify-evenly gap-y-3 border-b-2 items-start ">
                <div className="md:w-[40%] py-3 xl:pe-10">
                    <h3 className="text-xl font-bold">Executive Guide: PayPal enterprise integration </h3>
                    <p className="py-3 text-lg">Whether you're making a switch or upgrading your tools, learn how we make the integration process as flexible and seamless as possible. </p>
                    <a href="#" className="text-blue-400">Get the guide  <FontAwesomeIcon icon={faArrowRightLong} className="text-sm pt-2" /></a>
                </div>
                <div className="md:w-[44%] md:border-s-2 py-3 md:ps-16">
                    <h3 className="text-xl font-bold">eBook: Signs you've outgrown your payment processor</h3>
                    <p className="py-4 text-lg">Payments processer stunting your growth? It might be time to look for a new one.</p>
                    <a href="#" className="text-blue-400">Read the ebook   <FontAwesomeIcon icon={faArrowRightLong} className="text-sm pt-2" /></a>
                </div>
            </div>
            <div className="px-7 md:px-5 flex flex-wrap justify-evenly lg:justify-evenly items-center py-10">
                <div className="bg-[#111660] w-full md:w-[32%] lg:w-[25%]  h-[150px] md:h-[200px] flex justify-center items-center py-20">
                    <FontAwesomeIcon icon={faChartBar} className="text-white text-9xl" />
                </div>
                <div className="md:w-[50%] lg:w-[59%] py-5">
                    <h3 className="text-xl  font-bold">Report: Forrester economic impact analysis</h3>
                    <p className="py-4 text-lg">Forrester concluded that our enterprise solutions deliver credit card and alternative payment processing services fast and at scale, while enabling high authorization rates.</p>
                    <a href="#" className="text-blue-400">Get the report    <FontAwesomeIcon icon={faArrowRightLong} className="text-sm pt-2" /></a>
                </div>
            </div>
        </>
    );
}

export default Guide;