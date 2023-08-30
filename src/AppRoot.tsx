// Hooks
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useAuth } from "./utils/useAuth";

// Router components
import { Routes, Route, useNavigate } from "react-router-dom";

// App Pages
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function AppRoot() {
  const auth = useAuth();
  const [cookies] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.token && cookies.github_access_token) {
      auth.updateToken(cookies.github_access_token);
    }
  }, [auth.token, navigate, cookies, auth]);

  return (
    <Routes>
      <Route path="/" element={auth.token ? <Login /> : <Dashboard />} />
      <Route path="/callback" element={<Auth />} />
    </Routes>
  );
}

export default AppRoot;
