import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import girl from "./images/girl.jpg";
const Managerisk = () => {
    return (
        <div className="bg-[#FBFBFB] py-8 w-full">
            <div className="w-full flex flex-wrap px-7 md:px-7 py-3 justify-evenly items-center">
                <div className="w-full md:w-[37%] h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden">
                    <img src={girl} alt="payment options" className="w-full h-full rounded-xl" />
                </div>
                <div className="pt-5 md:w-[50%]">
                    <h3 className="text-4xl font-bold">Manage risk and compliance</h3>
                    <p className="py-4 tracking-wider text-lg">We can help you identify and manage potential security, fraud, and compliance risk-so you can focus on what matters most: growing your business.</p>
                    <a href="#" className="text-blue-400">Learn more about managing risk <FontAwesomeIcon icon={faArrowRightLong} className="text-sm pt-2" /></a>
                </div>
            </div>
            <div className="flex flex-wrap px-7 md:px-5 lg:px-8 pt-4 lg:py-10 justify-around lg:justify-evenly items-start">
                <div className="md:w-[40%] lg:w-1/5 md:pt-3">
                    <h3 className="text-xl font-bold">Right size your fraud solution</h3>
                    <p className="tracking-wider py-3">Choose the level of fraud protection you need-from our built-in fraud checks to advanced tools.</p>
                    <a href="#" className="text-blue-400">About Fraud Protection  <FontAwesomeIcon icon={faArrowRightLong} className="text-sm pt-2" /></a>
                </div>
                <div className="md:w-[40%] lg:w-1/5 pt-3">
                    <h3 className="text-xl font-bold">Arm yourself against chargebacks </h3>
                    <p className="tracking-wider py-3">We can handle fraud analysis, plus cover any eligible chargeback losses and dispute fees.</p>
                </div>
                <div className="md:w-[40%] lg:w-1/5 pt-3">
                    <h3 className="text-xl font-bold">Keep up with compliance </h3>
                    <p className="tracking-wider py-3">Work with one of the most connected fintech providers to help respond to changing risk and compliance guidance.</p>
                </div>
                <div className="md:w-[40%] lg:w-1/5 pt-3">
                    <h3 className="text-xl font-bold">Let us manage disputes </h3>
                    <p className="tracking-wider py-3">Our dispute automation solution pulls data from your payment records and submits responses to issuers in real time.</p>
                </div>
            </div>

        </div>
    );
}

export default Managerisk;