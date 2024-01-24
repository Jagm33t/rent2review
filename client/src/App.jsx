import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import SignUp from './pages/SignUp';
// import SignIn from './pages/SignIn';
// import Profile from './pages/Profile';
import Header from './components/Header';
// import PrivateRoute from './components/PrivateRoute';
// import CreateListing from './pages/CreateListing';
// import UpdateListing from './pages/UpdateListing';
// import Listing from './pages/Listing';
// import Search from './pages/Search';
import ReadReview from './pages/ReadReview';
// import PostReview from './pages/PostReview';
// import SearchReview from './pages/SearchReview';
import ChooseSubmit from './pages/ChooseSubmit';
import RateLandlord from './pages/RateLandlord';
import RateTenant from './pages/RateTenant';


function App() {
  

  return (
    <BrowserRouter>
    <Header />
     <Routes>
       <Route path='/' element={<Home />} />
       {/* <Route path='/signin' element={<SignIn />} /> */}
       <Route path='/about' element={<About />} />
       {/* <Route path='/search' element={<Search />} /> */}
       <Route path='/choose' element={<ChooseSubmit />} />
       {/* <Route path='/signup' element={<SignUp />} /> */}
       {/* <Route path='/listing/:listingId' element={<Listing />} /> */}
       {/* <Route element={<PrivateRoute />} > */}
       {/* <Route path='/profile' element={<Profile />} /> */}
       {/* <Route path='/create-listing' element={<CreateListing /> } /> */}
       {/* <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route> */}
        <Route path='/readreview' element={<ReadReview />} />
        <Route path='/ratelandlord' element={<RateLandlord />} />
        <Route path='/ratetenant' element={<RateTenant />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
