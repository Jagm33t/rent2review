import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
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
      healthAndSafety: Number,
      respect: Number,
      depositReturnChances: Number,
      tenantPrivacy: Number,
      repair: Number,
      rentalStability: Number,
      overallCleanliness: Number,
      noiseLevel: Number,
      maintenanceResponse: Number,
      security: Number,
      amenities: Number,
      managementResponsiveness: Number,

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

const Review = mongoose.model('Review', reviewSchema);

export default Review;
