import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { AboutUs } from "./pages/AboutUs";

function App() {
    return (
      <BrowserRouter>
        <div className=" min-h-screen flex flex-col justify-between mx-auto p-4" >
                <NavBar />
                <Routes>
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
          <Footer />
            </div>

        
      </BrowserRouter>
  );
}

export default App;

