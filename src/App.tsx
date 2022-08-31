import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import DetailWeather from "./Components/DetailWeather/DetailWeather";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App column">
      <BrowserRouter>
        <Header />
        <div className="column center">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/weather" element={<DetailWeather/>}/>
        </Routes>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
