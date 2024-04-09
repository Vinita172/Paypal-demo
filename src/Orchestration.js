import process from "./images/process.jpg";

const Orchestration=()=>{
 return(
    <>
    <div className="flex flex-wrap px-7 md:px-5 py-3 justify-evenly items-center">
        <div className="md:w-[45%]">
            <h3 className="text-4xl font-bold">Orchestration made simple </h3>
            <p className="pt-4 text-lg">Move on from piecemeal management of disparate tools, reporting systems, and processers. Use our flexible tools to manage the entire payment process, help increase resiliency, and reduce operational complexity. </p>
        </div>
        <div className="md:w-[40%] h-[300px] md:h-[330px] xl:h-[470px] pt-5">
            <img src={process} alt="payment options" className="w-full h-full" />
        </div>
    </div>
    <div className="flex flex-wrap px-7 md:px-5 lg:px-8 pt-5 lg:py-10 justify-around lg:justify-evenly items-start">
        <div className="md:w-[40%] lg:w-1/5">
            <h3 className="text-xl font-bold md:pt-3">Orchestrate multiple payments </h3>
            <p className="tracking-wide py-3">You always maintain full control of your data and configure partner access.</p>
        </div>
        <div className="md:w-[40%] lg:w-1/5 pt-3">
            <h3 className="text-xl font-bold">Easily create secure data connections</h3>
            <p className="tracking-wide py-3">Use just a few snippets of code to securely share data with partners you choose. </p>
        </div>
        <div className="md:w-[40%] lg:w-1/5 pt-3">
            <h3 className="text-xl font-bold">Streamline reconciliation</h3>
            <p className="tracking-wide py-3">Enable separate accounts to connect and share information.</p>
        </div>
        <div className="md:w-[40%] lg:w-1/5 pt-3">
            <h3 className="text-xl font-bold">Unlock new sales channels</h3>
            <p className="tracking-wide py-3">Connect to commercial partners so you can accept payments on their websites.</p>
        </div>
    </div>

</>
 );
}
export default Orchestration;