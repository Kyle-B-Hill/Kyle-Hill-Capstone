import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserPage from "./Pages/UserPage/UserPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" to element={<HomePage />} />
          <Route path="/user/:id" element={<UserPage />} /> 
          {/* <Route path="/MatchPage" element={<MatchPage />} />  */}
          {/* <Route page="/EditProfilePage" element={<EditProfilePage />} /> */}
          {/* <Route page="/CreateAccountPage" element={<CreateAccountPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
