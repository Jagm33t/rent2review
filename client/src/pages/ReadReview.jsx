import React from 'react';

const ReadReview = () => {
  return (
    <div className="bg-white p-6 shadow rounded-lg my-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">New England Family Housing</h2>
        <p className="text-gray-600">Claremont, New Hampshire, US, 03743</p>
        <p className="text-gray-500">11/30/2023</p>
      </div>
      <div className="border-t pt-4">
        <div className="flex justify-between items-center text-gray-600 mb-2">
          <span>Health and Safety:</span>
          <span className="font-medium">★★☆☆☆</span>
        </div>
        <div className="flex justify-between items-center text-gray-600 mb-2">
          <span>Respect:</span>
          <span className="font-medium">★★★☆☆</span>
        </div>
        <div className="flex justify-between items-center text-gray-600 mb-2">
          <span>Tenant Privacy:</span>
          <span className="font-medium">★★☆☆☆</span>
        </div>
        <div className="flex justify-between items-center text-gray-600 mb-2">
          <span>Repair:</span>
          <span className="font-medium">★★★☆☆</span>
        </div>
        <div className="flex justify-between items-center text-gray-600">
          <span>Rental Stability:</span>
          <span className="font-medium">★★★☆☆</span>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-gray-700">
          Absolute garbage rentals run by absolute garbage humans. Raising my rent by another
          $100 despite the fact that there are 3 people currently in a 1 bedroom and I've
          repeatedly asked them to transfer us to a larger unit...
        </p>
      </div>
    </div>
  );
};

export default ReadReview;
