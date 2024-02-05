import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./Pages/UserPage/UserPage";
import HomePage from "./Pages/HomePage/HomePage";
import MatchPage from "./Pages/MatchPage/MatchPage";
import EditProfilePage from "./Pages/EditProfilePage/EditProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} /> 
          <Route path="/Palominos" element={<MatchPage />} /> 
          <Route path="/Edit" element={<EditProfilePage />} />
          {/* <Route path="/CreateAccountPage" element={<CreateAccountPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
