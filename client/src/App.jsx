import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import Header from './components/Header';

import ReadReview from './pages/ReadReview';

import ChooseSubmit from './pages/ChooseSubmit';
import RateLandlord from './pages/RateLandlord';
import RateTenant from './pages/RateTenant';
import ReadTenantReview from './pages/ReadTenantReviews';
import ChooseRead from './pages/ChooseRead';


function App() {
  

  return (
    <BrowserRouter>
    <Header />
     <Routes>
       <Route path='/' element={<Home />} />
      
       <Route path='/about' element={<About />} />
     
       <Route path='/choosesubmit' element={<ChooseSubmit />} />
       <Route path='/chooseread' element={<ChooseRead />} />
   <Route path='/readlandlordreview' element={<ReadReview />} />
        <Route path='/readtenantreview' element={<ReadTenantReview />} />
        <Route path='/ratelandlord' element={<RateLandlord />} />
        <Route path='/ratetenant' element={<RateTenant />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
