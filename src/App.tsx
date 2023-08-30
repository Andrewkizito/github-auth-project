// Router components
import { Routes, Route } from "react-router-dom";

// App Pages
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";

// UI Components
import { AuthProvider } from "./components/AuthProvider";
import { ReactNotifications } from "react-notifications-component";

function App() {
  return (
    <AuthProvider>
      <ReactNotifications />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/callback" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
