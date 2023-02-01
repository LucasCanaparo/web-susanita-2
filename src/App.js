import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/home" component={Home} />
          <Route exact path="/videogames" component={Formualrio} />
          <Route exact path="/home/:id" component={Detail} /> */}
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
