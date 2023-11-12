import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Singnin from './pages/Singnin';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
function App() {
  

  return (
    <BrowserRouter>
    <Header />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/signup' element={<SignUp />} />
       <Route path='/signin' element={<Singnin />} />
       <Route element={<PrivateRoute />} >
       <Route path='/profile' element={<Profile />} />
       <Route path='/create-listing' element={<CreateListing /> } />
       </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
