// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import SwiperCore from 'swiper';
import 'swiper/css/bundle';
// import ListingItem from '../components/ListingItem';

export default function Home() {
  // const [offerListings, setOfferListings] = useState([]);
  // const [saleListings, setSaleListings] = useState([]);
  // const [rentListings, setRentListings] = useState([]);
  // SwiperCore.use([Navigation]);
  // console.log(offerListings);
  // useEffect(() => {
  //   const fetchOfferListings = async () => {
  //     try {
  //       const res = await fetch('/api/listing/get?offer=true&limit=4');
  //       const data = await res.json();
  //       setOfferListings(data);
  //       fetchRentListings();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   const fetchRentListings = async () => {
  //     try {
  //       const res = await fetch('/api/listing/get?type=rent&limit=4');
  //       const data = await res.json();
  //       setRentListings(data);
  //       fetchSaleListings();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   const fetchSaleListings = async () => {
  //     try {
  //       const res = await fetch('/api/listing/get?type=sale&limit=4');
  //       const data = await res.json();
  //       setSaleListings(data);
  //     } catch (error) {
  //       log(error);
  //     }
  //   };
  //   fetchOfferListings();
  // }, []);
  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
      <h1 className='text-slate-700 font-bold text-4xl lg:text-8xl'>Where Your Voice Shapes the Rental World</h1>
        <h2 className='text-slate-700 font-bold text-2xl lg:text-5xl'>
        <span className='text-green-500'>Connect</span> , Share, and Thrive: Elevating Rental Experiences for <span className='text-blue-500'>Tenants</span> and <span className='text-blue-500'>Landlords</span>
          <br />
       
        </h2>
        <div className='text-custom-grey text-xs sm:text-sm'>
        Welcome to our innovative platform revolutionizing the rental journey. We're dedicated to elevating the voices of tenants and landlords alike, fostering a transparent, honest, and accountable rental community.
          
          

        </div>
        <div className='flex flex-row gap-5'>
        <Link
          to={'/chooseread'}>
        <button class="w-[150px] bg-blue-500 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
  Read Review
</button>
</Link>
<Link
          to={'/choosesubmit'}>
<button  class="w-[150px] bg-blue-500 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
 Submit Review
</button>
</Link>


        </div>
        {/* <Link
          to={'/search'}
          className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
        >
          Let's get started...
        </Link> */}
      </div>

      {/* swiper */}
      {/* <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper> */}

      {/* listing results for offer, sale and rent */}
{/* 
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
}