import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import FifthScreen from './screens/FifthScreen';
import BasicAccordion from './components/Akordion/Akordion';
import ByMe from './components/ByMe/ByMe';
import NewImagesGrid from './screens/grid/NewImageGrid';
import PrivacyPolicy from './components/privacy/Privacy';


function App() {
  return <>
  <div class="app">
  <FirstScreen/>  
  <SecondScreen/>
  <ForthScreen/>
  <ThirdScreen/>
<FifthScreen/>
<NewImagesGrid/>
  <BasicAccordion/>
<PrivacyPolicy 
  ownerName="ספיר דיין" 

  phone="+972 52-704-7058" 
  domain="https://sapirdayanmakeup.co.il/" 
/>
  <ByMe/>
  </div>
  </>
}

export default App;
