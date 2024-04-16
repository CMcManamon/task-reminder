import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { Container } from "@mui/material";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_PUBLIC_GOOGLE_API_TOKEN}
    >
      <BrowserRouter>
        <Container maxWidth="md">
          <NavBar />
          <Routes>
            <Route path="/auth" exact element={<Auth />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
