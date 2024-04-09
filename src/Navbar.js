import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Navbar = () => {
    const [isOpen,setIsOpen]=useState(true);
    const toggle=()=>{
       setIsOpen((isOpen)=> !isOpen);
    }
    return (
        <div className="w-full bg-white z-50 fixed">
            <nav className="w-full p-3 border-b border-gray-300 md:p-5 flex gap-10 justify-between items-center h-16">
                <div className="flex gap-10 items-center">
                    <div><FontAwesomeIcon icon={faPaypal} size="2x" className="text-[#043087]" /></div>
                    <ul className="hidden md:flex gap-8 text-blue-950 font-medium">
                        <li>Personal</li>
                        <li>Buisness</li>
                        <li>Developer</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <button className="border-blue-800 border py-2 px-9 rounded-3xl text-blue-800">Log In</button>
                    <button className="bg-[#043087] border py-2 px-9 rounded-3xl text-white mx-2">Sign Up</button>
                </div>
             <div className="md:hidden" onClick={toggle}><FontAwesomeIcon icon={faBars} size="2x" className="text-[#043087]"  /></div>
            </nav>
            {isOpen && <ul className="w-full bg-white text-blue-900 font-medium text-center md:hidden">
                <li className="py-2 my-2 border-b">Personal</li>
                <li className="py-2 my-2 border-b">Buisness</li>
                <li className="py-2 my-2 border-b">Developer</li>
                <li className="py-2 my-2 border-b">Help</li>
            </ul>}
        </div>
    );
}

export default Navbar;