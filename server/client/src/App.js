import Aboutpg from "./components/pages/about";
import Gallerypg from "./components/pages/gallery";
import Homepg from "./components/pages/homepg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ourmenu from "./components/pages/ourmenu";
import Contact from "./components/pages/contact";
import Adminpg from "./components/pages/admin";
import Signin from "./components/pages/signin";

function App() {
  return (
    <div className="Main_div">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Homepg />} />
          <Route path="/about" element={<Aboutpg />} />
          <Route path="/ourmenu" element={<Ourmenu />} />
          <Route path="/gallery" element={<Gallerypg />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Adminpg />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
