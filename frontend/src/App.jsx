import "./App.css";
import Home_Page from "./pages/Home_Page/Home_Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_Page />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
