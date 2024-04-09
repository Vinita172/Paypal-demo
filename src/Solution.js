import { faArrowRightLong, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Solution=()=>{
    return(
        <div className="flex flex-wrap bg-[#111660] py-20 text-white justify-evenly lg:justify-around md:h-[600px] lg:h-[650px] px-7 md:px-5">
            <div className="py-2 md:w-[36%] lg:w-[40%] md:py-20">
               <h3 className="text-4xl font-bold">Our modular solution can grow with you </h3>
               <p className="py-4 text-lg">Turn on the features you want, connect with the partners in your payments ecosystem, and keep the rest in your back pocket for whatever comes next. </p>
               <a href="#" className="text-blue-400">More about payment methods <FontAwesomeIcon icon={faArrowRightLong} className="text-sm pt-2" /></a>
            </div>
            <div className="bg-white text-black my-5 md:w-[50%] lg:w-[40%] p-5 xl:p-9">
              <div className="flex items-center justify-between border-t-2 py-3 xl:p-3 border-b-2">
                <p className="xl:w-[85%]">Accept payments in 200 markets and 130 currencies</p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
              <div className="flex items-center justify-between py-3 xl:p-3 border-b-2">
                <p>Make payouts in 200 markets </p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
              <div className="flex items-center justify-between py-3 xl:p-3 border-b-2">
                <p>Acquiring in 47 markets</p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
              <div className="flex items-center justify-between py-3 xl:p-3 border-b-2">
                <p>Wide range of payment methods</p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
              <div className="flex items-center justify-between py-3 xl:p-3 border-b-2">
                <p>Recurring billing capabilities </p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
              <div className="flex items-center justify-between py-3 xl:p-3 border-b-2">
                <p>Network tokenization</p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
              <div className="flex items-center justify-between py-3 xl:p-3 border-b-2">
                <p>Batch and real-time account updater</p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
              <div className="flex items-center justify-between py-3 xl:p-3 border-b-2">
                <p>Advanced predictive risk solutions</p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
              <div className="flex items-center justify-between py-3 xl:p-3 border-b-2">
                <p>PCI-compliant vault</p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
              <div className="flex items-center justify-between py-3 xl:p-3 border-b-2">
                <p>Chargeback Protection </p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
              <div className="flex items-center justify-between py-3 xl:p-3 border-b-2">
                <p>Dispute automation</p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
              <div className="flex items-center justify-between py-3 xl:p-3 border-b-2">
                <p>IC++ pricing available</p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
              <div className="flex items-center justify-between py-3 xl:p-3 border-b-2">
                <p>White glove onboarding & support</p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
              <div className="flex items-center justify-between py-3 xl:p-3 border-b-2">
                <p>Flexible, scalable integration </p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
              <div className="flex items-center justify-between py-3 xl:p-3 border-b-2">
                <p>24/7 monitoring & optimization</p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
              <div className="flex items-center justify-between py-3 xl:p-3 border-b-2">
                <p>Global support center</p>
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl" style={{color: "#c9f5ec",}} />
              </div>
            </div>
        </div>
    );
}

export default Solution;