import './App.css';
import Adds from './component/Pages/Adds/Adds';
// import Info from './component/Pages/Info/Info';
import Step from './component/StepDispaly/Step';


function App() {
  return (
    <div className="container">
      <Step />
      {/* <Info /> */}
      <Adds />
    </div>
  );
}

export default App;
