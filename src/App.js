import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import MainPage from "./pages/mainPage";
import SignUp from "./pages/signUp";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/course/:id" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
