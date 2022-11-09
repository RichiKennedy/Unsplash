import { Routes, Route } from "react-router-dom";
import { MyContextProvider } from "./context/DataContext";
import About from "./pages/About";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Category from "./pages/Category";

function App() {
  return (
    <MyContextProvider>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<NoPage />} />
      <Route path="/:categoryID" element={<Category />} />
    </Routes>
    </MyContextProvider>
  );
};

export default App;
