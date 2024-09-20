import './App.css'
import { Routes,Route,BrowserRouter as Router } from "react-router-dom";
import Login from './components/Login';
import Games from './components/Games.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import Register from './components/Register';
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import VideoGames from "./components/videogames.jsx";
import About from "./components/about.jsx";
import { AuthProvider } from './context/authcontext';
import Type from './components/Type.jsx';
function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Home" element={<Games/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/VideoGames" element={<VideoGames/>}></Route>
        <Route path="/Type" element={<Type/>}></Route>
        <Route path="/About" element={<About/>}></Route>

        <Route element={<ProtectedRoutes></ProtectedRoutes>}>
          <Route path="/profile" element={<ProfilePage></ProfilePage>} />
        </Route>
      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
