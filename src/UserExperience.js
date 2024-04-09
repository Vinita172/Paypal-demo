import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import suitcase from "./images/suitcase.jpg";

const UserExperience=()=>{
    return(
      <div className="bg-[#111660] py-11 px-7 flex flex-wrap justify-evenly lg:justify-around items-center md:px-5 md:mt-16 lg:mt-24 text-white">
        <div className="md:w-[40%] lg:w-[39%]">
        <p><FontAwesomeIcon className="text-5xl" icon={faQuoteLeft} /></p>
        <p className="py-4 text-lg">The user experience in terms of usability, trust, and flexibility is everything, especially for the digitally native consumer. The experience PayPal helps us provide is beating all consumer expectations. </p>
        <p>David Okerman </p>
        <p>Chief Marking Officer</p>
        <p className="pt-2">Samsonite</p>
        </div>
        <div className="py-5 md:py-0 md:w-[40%] lg:h-[530px] md:-mt-20 lg:-mt-24"> 
            <img src={suitcase} className="w-full h-full"/>  
        </div>
      </div>
    );
}

export default UserExperience;