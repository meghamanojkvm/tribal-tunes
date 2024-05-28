import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./lib/context/user";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { AllInstrument } from "./pages/AllInstruments";
import { AddInstrument } from "./pages/AddInstrument";
import { ShowInstrument } from "./pages/ShowInstrument";
<<<<<<< HEAD
// import { ShowPiano } from './pages/ShowPiano';
=======
import { AboutUs } from "./pages/AboutUs";
>>>>>>> 26d4ae0529c00c33d89e5b9899a708ab15f9469c
 // Ensure this is imported correctly


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/instruments" element={<AllInstrument />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/addinstrument" element={<AddInstrument />} />
<<<<<<< HEAD
          <Route path="/instruments/:id" element={<ShowInstrument />} /> 
          {/* <Route path="/piano" component={<ShowPiano />} /> */}
=======
          <Route path="/instruments/:id" element={<ShowInstrument />} />
          <Route path="/aboutUs" element={<AboutUs/>} />

>>>>>>> 26d4ae0529c00c33d89e5b9899a708ab15f9469c
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
