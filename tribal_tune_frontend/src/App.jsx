import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./lib/context/user";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { AllInstrument } from "./pages/AllInstruments";
import { AddInstrument } from "./pages/AddInstrument";
import { ShowInstrument } from "./pages/ShowInstrument";
import { ShowPiano } from './pages/ShowPiano';
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
          <Route path="/instruments/:id" element={<ShowInstrument />} /> 
          <Route path="/piano" component={<ShowPiano />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
