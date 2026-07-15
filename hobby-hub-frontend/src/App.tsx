import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { AboutUs } from "./pages/AboutUs";
import { Home } from "./pages/Home"; 
import HobbyDetailsPage from "./DetailsPage/HobbyDetailsPage";

function App() {
    return (
      <BrowserRouter>
        <div className=" min-h-screen flex flex-col mx-auto p-4" >
          <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/hobby-details/:hobbyName" element={<HobbyDetailsPage /> } />
                </Routes>
          <Footer />
        </div>

        
      </BrowserRouter>
  );
}

export default App;

