import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchPage from "./pages/SearchPage";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search/:searchQuery" element={<SearchPage/>}/>
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
