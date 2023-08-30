// UI Components
import { AuthProvider } from "./components/AuthProvider";
import { ReactNotifications } from "react-notifications-component";
import AppRoot from "./AppRoot";

function App() {
 

  return (
    <AuthProvider>
      <ReactNotifications />
      <AppRoot />
    </AuthProvider>
  );
}

export default App;
