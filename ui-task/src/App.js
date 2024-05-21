import "./App.scss";
import Organizations from "./Components/Organizations";
import more from '../src/Assets/more.png'

function App() {
  
  return (
    <div className="App">
      <div className="header">
        <img src={more} height={40}  style={{marginLeft:"20px"}}/>
      </div>
      <Organizations/>
    </div>
  );
}

export default App;
