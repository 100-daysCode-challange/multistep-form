import './App.css';
import Info from './component/Pages/Info/Info';
import Plan from './component/Pages/Plan/Plan';
import Step from './component/StepDispaly/Step';


function App() {
  return (
    <div className="container">
      <Step />
      {/* <Info /> */}
      <Plan />
    </div>
  );
}

export default App;
