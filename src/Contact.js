import { faTerminal, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact=()=>{
    return(
        <div className="w-full bg-[#FBFBFB] flex flex-wrap py-10 justify-evenly gap-y-5 mt-5 px-7 md:px-5">
            <div className="bg-white md:w-[42%] lg:h-[480px] relative p-5 md:p-7">
               <div className="w-full bg-[#111660] flex justify-center items-center pt-10 h-[180px]">
               <FontAwesomeIcon className="text-white text-9xl" icon={faUsers} />
               </div>
               <h3 className="text-xl font-bold pt-5">Contact our sales team</h3>
               <p className="py-3 text-lg">Learn how payments can be leveraged as a catalyst for growth.</p>
               <button className="bg-[#043087] border py-2 px-9  xl:absolute xl:bottom-0 my-5 xl:mb-10 rounded-3xl text-white">Contact Sales</button>
            </div>
            <div className="bg-white md:w-[42%] xl:h-[480px] p-5 md:p-7 relative">
               <div className="w-full bg-[#111660] flex justify-center items-center pt-10 h-[180px]">
               <FontAwesomeIcon className="text-white text-9xl" icon={faTerminal} />
               </div>
               <h3 className="text-xl font-bold pt-5">Explore developer documentation </h3>
               <p className="py-3 text-lg">See how our flexible and interoperable technology helps to simplify integration.</p>
               <button className="bg-[#043087] border py-2 px-9 rounded-3xl xl:mb-10 my-5 xl:absolute xl:bottom-0 text-white">Visit Developer Docs</button>
            </div>
        </div>
    );
}

export default Contact;