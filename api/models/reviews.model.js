import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    property: {
      name: {
        type: String,
        required: true
      },
      
    },
    ratings: {
      healthAndSafety: Number,
      respect: Number,
      tenantPrivacy: Number,
      repair: Number,
      returnDepositChances: Number,
      rentalStability: Number,
      overallCleanliness: Number,
      noiseLevel: Number,
      maintenanceResponse: Number,
      securityAndSafety: Number,
      amenities: Number,
      neighborhoodAndLocation: Number,
      managementResponsiveness: Number,
      pestControl: Number,
      valueForMoney: Number,
      leaseFlexibility: Number,
      utilityServices: Number,
      communityAndSocialEnvironment: Number,
      ecoFriendliness: Number,
      interiorCondition: Number,
      exteriorAndGrounds: Number
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
