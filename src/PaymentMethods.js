import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pmethods from "./images/paymentsoption.jpg"

const PaymentMethods = () => {
    return (
        <>
            <div className="flex flex-wrap px-7 md:px-5 py-3 justify-evenly items-center">
                <div className="md:w-[40%]">
                    <h3 className="text-4xl font-bold">Offer a range of payment methods worldwide</h3>
                    <p className="pt-4 text-lg">Reach new customers and give them the payment options they prefer so you don't miss a sale.</p>
                    <p className="py-4 text-lg">Accept credit and debit cards, digital wallets, PayPal, and 20+ local payment methods. All in a single integration .</p>
                    <a href="#" className="text-blue-400">More about payment methods <FontAwesomeIcon icon={faArrowRightLong} className="text-sm pt-2" /></a>
                </div>
                <div className="md:w-[45%] h-[250px] md:h-[350px] pt-5">
                    <img src={pmethods} alt="payment options" className="w-full h-full" />
                </div>
            </div>
            <div className="flex flex-wrap px-7 md:px-5 lg:px-8 pt-5 lg:py-10 justify-around lg:justify-evenly items-start">
                <div className="md:w-[40%] lg:w-1/5">
                    <h3 className="text-xl font-bold md:pt-3">Enable multiple commerce scenarios </h3>
                    <p className="tracking-wide py-3">Web Mobile. App. In store Get paid in the channels where you sell today and tomorrow.</p>
                </div>
                <div className="md:w-[40%] lg:w-1/5 pt-3">
                    <h3 className="text-xl font-bold">Reach millions of consumers</h3>
                    <p className="tracking-wide py-3">Connect with our expansive network of shoppers around the world who love to use PayPal Venmo, and Pay Later.</p>
                </div>
                <div className="md:w-[40%] lg:w-1/5 pt-3">
                    <h3 className="text-xl font-bold">Vault customer payment info</h3>
                    <p className="tracking-wide py-3">Help drive conversion and make repeat purchases simple for your customers with secure data storage.</p>
                </div>
                <div className="md:w-[40%] lg:w-1/5 pt-3">
                    <h3 className="text-xl font-bold">Optimize checkout experience</h3>
                    <p className="tracking-wide py-3">Control the look and feel of your checkout page with drop-in UI, hosted fields, and customizable smart payment buttons.</p>
                </div>
            </div>

        </>
    );
}

export default PaymentMethods;