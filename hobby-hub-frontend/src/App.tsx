import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { AboutUs } from "./pages/AboutUs";
import { Home } from "./pages/Home"; 

function App() {
    return (
      <BrowserRouter>
        <div className=" min-h-screen flex flex-col mx-auto " >
          <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
          <Footer />
        </div>

        
      </BrowserRouter>
  );
}

export default App;

