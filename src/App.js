import './App.css';
// import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Subcategories from './pages/Subcategories/Subcategories';
import Login from './pages/Login/Login';
import Header from './components/Header/Header';
import Verify from './pages/Verify/Verify';
import Files from './pages/Files/Files';
import Articles from './pages/Articles/Articles';
import Profile from './pages/Pofile/Profile';
import Contact from './pages/Contact/Contact';
import Emailer from './pages/Emailer/Emailer';
import Videos from './pages/Videos/Videos';
import Portals from './pages/Portals/Portals';
import BottomNav from './components/BottomNav/BottomNav';
import EditProfile from './pages/EditProfile/EditProfile';
import Services from './pages/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Header />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/home" element={<Home />} />
          <Route path="/subcategories/:catId" element={<Subcategories />} />
          <Route path="/files" element={<Files />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/emailer" element={<Emailer />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/portals" element={<Portals />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        <BottomNav />

      </BrowserRouter>
    </div>
  );
}

export default App;
