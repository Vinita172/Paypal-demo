import teamimg from "./images/team.jpg";
import codeimg from "./images/code.jpg";
import bowlimg from "./images/bowlset.jpg";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Herosection = () => {
   return (
      <div className>
         <div className="flex flex-col justify-center items-center h-[400px] md:h-[75vh] lg:h-[75vh] xl:h-[65vh] xl:pt-22   w-full  pt-20">
            <div className="md:w-[70%] lg:w-[45%] m-3">
               <h1 className="font-bold text-2xl  md:text-5xl text-center leading-tight tracking-wide">Global payment <br /> processing solutions</h1>
               <p className="my-5 text-center lg:text-start tracking-wider">Grow and optimize your buisness ith a flexible,end-to-end payments platform powerd by Braintree technology</p>
               <div className="text-center my-2">
                  <button className="bg-[#043087] border py-3 px-9 rounded-3xl text-white mx-2">Connect with Payments Expert</button>
               </div>
            </div>
         </div>
         <div className="bg-[#FBFBFB] md:w-[85%] lg:w-[85%] flex flex-wrap gap-y-4 mx-auto  justify-center md:justify-around items-end py-5">
            <div className="w-11/12 md:w-[37%] md:h-72 xl:h-[350px]"><img src={teamimg} className="h-full w-full" alt="team img" /></div>
            <div className="w-11/12 md:w-[37%] h-80 xl:h-[400px] border-1 overflow-hidden rounded-xl md:relative md:-ms-24 lg:-ms-56"><img src={codeimg} className="h-full w-full" alt="code img" /></div>
            <div className="flex flex-col bg-white w-11/12 md:w-[43%] lg:w-[33%] md:h-80 xl:h-[400px] p-6 rounded-xl md:relative md:-ms-40 lg:-ms-80">
               <div className="rounded-xl overflow-hidden"><img src={bowlimg} className="h-full w-full" alt="bowl img" /></div>
               <div className="py-5 flex justify-between">
                  <div>
                     <h3 className="font-bold">Speckeled Bowl Set</h3>
                     <p className="text-gray-400">Set of two</p>
                  </div>
                  <p className="text-gray-400">$24.00</p>
               </div>
               <button className="bg-blue-200  py-2 px-9 rounded-3xl  text-gray-700 w-full">Checkout</button>
               <div className="p-2 bg-white text-center hidden md:block absolute top-16 md:-right-20 xl:-right-28  shadow-lg rounded-t-xl px-5"><span className="font-bold">Paypal Assistant</span> <FontAwesomeIcon className="ps-4  text-slate-600" icon={faAngleUp} /></div>
            </div>
         </div>
      </div>

   );
}

export default Herosection;