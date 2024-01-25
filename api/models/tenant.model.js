import mongoose from 'mongoose';

const tenantSchema = new mongoose.Schema(
  {
    property: {
      name: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      zip: {
        type: String,
        required: true
      }
    }, // Corrected: Added closing bracket for the property object
    ratings: {
     //for tenant 
     paymentTimeliness:  Number,
      propertyCare: Number,
      leaseCompliance: Number,
      communication:  Number,
      neighborRelations:  Number,
    }, 
    reviewText: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
  },
  { timestamps: true }
);

const Tenant = mongoose.model('Tenant', tenantSchema);

export default Tenant;
