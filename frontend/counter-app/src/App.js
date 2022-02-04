import {Routes,Route,Navigate} from "react-router-dom"
import Counter from "./components/Counter/Counter";
import Report from "./components/Report/Report";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path ="/" element={<Counter/>} />
            <Route path ="/report" element={<Report/>} />
        </Routes>
    </div>
  );
}

export default App;
