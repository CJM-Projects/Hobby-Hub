import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { AboutUs } from "./pages/AboutUs";
import { Home } from "./pages/Home"; 
import HobbyDetailsPage from "./DetailsPage/HobbyDetailsPage";
import { BrowseAll } from "./pages/BrowseAll";

function App() {
    return (
      <BrowserRouter>
        <div className=" min-h-screen flex flex-col mx-auto " >
          <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/hobby-details/:hobbyName" element={<HobbyDetailsPage /> } />
                    <Route path="/browse-all" element={<BrowseAll /> } />
                </Routes>
          <Footer />
        </div>

        
      </BrowserRouter>
  );
}

export default App;

