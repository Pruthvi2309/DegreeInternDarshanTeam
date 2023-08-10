
import './App.css';
import Parth from './Components/Parth';
import { Parth2 } from './Components/Parth2';
import Parth3 from './Components/Parth3'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Props } from './Components/Props';
import Messege from './Components/Messege';


function App() {
  return (
    <div className="App">
      <Parth/>
      <Parth2/>
      <Parth3/>
      <Messege/>
      <Props name="Parth" age="23"/>
    
    </div>
  );
}

export default App;
