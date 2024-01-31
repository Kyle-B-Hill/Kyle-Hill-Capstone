import './App.scss';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" to element={<HomePage />} />
          <Route path="/UserPage" element={<UserPage />} /> 
          <Route path="/MatchPage" element={<MatchPage />} /> 
          <Route page="/EditProfilePage" element={<EditProfilePage />} />
          <Route page="/CreateAccountPage" element={<CreateAccountPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
