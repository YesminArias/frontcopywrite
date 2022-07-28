import * as React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Componentes/LandingPage/LandingPage";
import { ThemeProvider, unstable_createMuiStrictModeTheme } from "@mui/material";
import axios from "axios";

const theme = unstable_createMuiStrictModeTheme({
  palette: {
    primary: {
      main: '#3f51b5'
    }

  }
})

axios.defaults.baseURL = "https://app-palindrome.herokuapp.com/" || "http://localhost:3001";

function App() {
  return (
    <ThemeProvider theme={theme} >
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
