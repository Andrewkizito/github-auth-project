// Hooks
import { useEffect } from "react";
import { useAuth } from "./utils/useAuth";

// Router components
import { Routes, Route } from "react-router-dom";
import { redirect } from "react-router-dom";

// App Pages
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function AppRoot() {
  const auth = useAuth();

  useEffect(() => {
    if (auth.token) {
      redirect("/dashboard");
    } else {
      redirect("/");
    }
  }, [auth.token]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/callback" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoot;
