import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing.js/Pricing';
import AssignmentMearks from './Components/AssignmentMearks/AssignmentMearks';
import Phone from './Components/Phones/Phone';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-4xl font-bold underline'>hello hi bay bay</h1>
      <Pricing></Pricing>
      <AssignmentMearks></AssignmentMearks>
      <Phone></Phone>
    </div>
  );
}

export default App;
