import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignOut from './pages/SignOut';
import Singnin from './pages/Singnin';
import Profile from './pages/Profile';
import Header from './components/Header';
function App() {
  

  return (
    <BrowserRouter>
    <Header />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/signout' element={<SignOut />} />
       <Route path='/signin' element={<Singnin />} />
       <Route path='/profile' element={<Profile />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
