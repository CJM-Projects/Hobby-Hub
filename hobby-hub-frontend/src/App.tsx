import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
      <div className=" min-h-screen flex flex-col justify-between mx-auto p-4" >
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
