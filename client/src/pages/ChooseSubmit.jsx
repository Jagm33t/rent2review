import React from 'react';
import { Link } from 'react-router-dom';
const ChooseSubmit = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Choose Review Type</h2>

      <div className="text-center">
      <Link
          to={'/ratelandlord'}>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Rate a Landlord
        </button>
        </Link>
        <p className="mt-2 text-sm text-gray-600">
          Share your experience as a tenant. Provide honest and respectful feedback about your landlord to help fellow tenants make informed decisions.
        </p>
      </div>


      <div className="text-center">
      <Link
          to={'/ratetenant'}>
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
          Rate a Tenant
        </button>
        </Link>
        <p className="mt-2 text-sm text-gray-600">
          As a landlord, your reviews can help other property owners understand the reliability and conduct of prospective tenants. Please be fair and objective.
        </p>
      </div>
    </div>
  );
};

export default ChooseSubmit;
