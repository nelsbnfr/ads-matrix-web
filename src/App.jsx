import { useEffect } from "react";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./pages/SignUp";

function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    fetch("/api/pageview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: window.location.href }),
    }).catch(console.error);
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <PageViewTracker />
      <CustomCursor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
