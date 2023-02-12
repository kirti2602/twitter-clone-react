import Login from "./pages/Login"
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="homepage" element={ <Homepage/> } />
        <Route path="profile" element={ <Profile/> } />
      </Routes>
    </div>
  );
}

export default App;
