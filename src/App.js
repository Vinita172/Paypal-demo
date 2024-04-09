import './App.css';
import Boostrate from './Boostrate';
import Contact from './Contact';
import Footer from './Footer';
import Guide from './Guide';
import Herosection from './Herosection';
import Info from './Info';
import Managerisk from './Managerisk';
import Navbar from './Navbar';
import Orchestration from './Orchestration';
import Partner from './Partner';
import PaymentMethods from './PaymentMethods';
import PaypalInfo from './PaypalInfo';
import Solution from './Solution';
import UserExperience from './UserExperience';

function App() {
  return (
   <div className="w-full">
     <Navbar/>
     <Herosection/>
     <PaypalInfo/>
     <PaymentMethods/>
     <Boostrate/>
     <Orchestration/>
     <Managerisk/>
     <Solution/>
     <Partner/>
     <UserExperience/>
     <Guide/>
     <Contact/>
     <Info/>
     <Footer/>
   </div>
  );
}

export default App;
