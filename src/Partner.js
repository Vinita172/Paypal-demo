import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Partner=()=>{
  return(
    <div className="w-full md:mt-[400px] py-5 px-7 md:px-5 overflow-hidden justify-evenly flex flex-wrap">
        <div className="h-64 md:h-80 rounded-xl w-full md:w-[45%] lg:w-[47%] bg-cover flex justify-center items-center bg-no-repeat bg-center bg-[url('./images/oats.jpg')]">
        <FontAwesomeIcon icon={faCirclePlay} className="text-white text-6xl md:text-6xl" />
        </div>
        <div className="py-5 md:py-0 md:w-[37%] lg:w-[35%]">
          <h3 className="text-4xl font-bold">Your partner for innovation</h3>
          <p className="py-4 text-lg">See how Pressed partnered with PayPal to help their development team build innovative solutions with limited resources-all powered by Braintree technology. </p>
          <a href="#" className="text-blue-400">Play the video <FontAwesomeIcon icon={faArrowRightLong} className="text-sm pt-2" /></a>
        </div>
    </div>
  );
}
export default Partner;