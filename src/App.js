import './App.css';
import Chart from './Components/columnChart';
import LineChart from './Components/lightColumn';
import Circle from './Components/circleChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiChart from './Components/apiChart'


function App() {
  return (
   <>
    <ApiChart/>
    <Chart/>
    <LineChart/>
    <Circle/>
    
   </>
  )
}

export default App;
