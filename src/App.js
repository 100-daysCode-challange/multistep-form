import './App.css';
import Summary from './component/Pages/Summary/Summary';
// import Adds from './component/Pages/Adds/Adds';
import Info from './component/Pages/Info/Info';
import Step from './component/StepDispaly/Step';


function App() {
  return (
    <div className="container">
      <Step />
      <Info />
      {/* <Adds /> */}
      {/* <Summary /> */}
    </div>
  );
}

export default App;
