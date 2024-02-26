import React from "react";
import LoginPage from "./Components/Login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./Components/Login/ForgotPassword";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginPage />}
          />
          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;