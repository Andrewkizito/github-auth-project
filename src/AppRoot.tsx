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
    const userAccessToken = cookies.github_access_token;
    if (!auth.token && userAccessToken) {
      auth.updateToken(userAccessToken);
      navigate("/dashboard");
    } else {
      navigate(auth.token ? "/dashboard" : "/login");
    }
  }, [auth.token, navigate, cookies, auth]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/callback" element={<Auth />} />
    </Routes>
  );
}

export default AppRoot;
