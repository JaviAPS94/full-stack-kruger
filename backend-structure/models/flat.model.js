import mongoose from "mongoose";

const flatSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  streetName: {
    type: String,
    required: true,
  },
  streetNumber: {
    type: String,
    required: true,
  },
  areaSize: {
    type: Number,
    required: true,
  },
  hasAc: {
    type: Boolean,
    default: false,
  },
  yearBuilt: {
    type: Number,
  },
  rentPrice: {
    type: Number,
    required: true,
  },
  dateAvailable: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Flat = mongoose.model("Flat", flatSchema);
