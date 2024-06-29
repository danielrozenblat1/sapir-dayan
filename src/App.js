import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import FifthScreen from './screens/FifthScreen';
import BasicAccordion from './components/Akordion/Akordion';
import ByMe from './components/ByMe/ByMe';


function App() {
  return <>
  <div class="app">
  <FirstScreen/>  
  <SecondScreen/>
  <ForthScreen/>
  <ThirdScreen/>
<FifthScreen/>
  <BasicAccordion/>
  <ByMe/>
  </div>
  </>
}

export default App;
