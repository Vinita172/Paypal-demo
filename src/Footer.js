import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import flag from "./images/flag.jpg"

const Footer = () => {
    return (
        <>
            <div className="flex gap-x-3 items-center justify-center md:justify-start p-3 md:px-5">
                <FontAwesomeIcon icon={faPaypal} size="2x" className="text-[#043087]" />
                <p className="text-3xl font-bold italic text-[#043087]">Pay<span className="text-blue-500">Pal</span></p>
            </div>
            <div className="m-3 md:m-5 py-2 md:my-0 md:flex md:justify-between border-b-2">
                <ul className="text-blue-900 font-bold text-center md:text-start flex flex-col md:flex-row md:gap-x-4">
                    <li className="w-full py-2">Help</li>
                    <li className="w-full py-2">Contact</li>
                    <li className="w-full py-2">Fees</li>
                    <li className="w-full py-2">Security</li>
                    <li className="w-full py-2">Apps</li>
                    <li className="w-full py-2">Shop</li>
                    <li className="w-full py-2">Enterprise</li>
                    <li className="w-full py-2">Partners</li>
                    <li className="w-full py-2">Feedback</li>
                </ul>
                <div className="w-8 h-6 hidden md:block"><img src={flag} className="w-full h-full" /></div>
            </div>
            <div className="m-3 md:m-5 py-2 md:my-0 lg:flex lg:flex-wrap lg:justify-between">
                <ul className="text-blue-900 font-bold text-center md:text-start md:flex md:flex-row md:gap-x-4 xl:gap-x-4">
                    <li className="py-2">About</li>
                    <li className="py-2">Newsroom</li>
                    <li className="py-2">Jobs</li>
                    <li className="py-2">Inverstor Relations</li>
                    <li className="py-2">Values in Action</li>
                    <li className="py-2">Public Policy</li>
                    <li className="py-2">Sitemap</li>

                </ul>
                <ul className="text-blue-900 font-bold text-center md:text-start md:flex  md:flex-row md:gap-x-4 xl:gap-x-4">
                    <li className="py-2">@1999-2022</li>
                    <li className="py-2">Accessibility</li>
                    <li className="py-2">Privacy</li>
                    <li className="py-2">Cookies</li>
                    <li className="py-2">Legal</li>
                </ul>

            </div>
        </>
    );

}

export default Footer;