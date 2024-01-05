import mongoose, { Document, Schema } from 'mongoose';
import { ITour } from '../interfaces/tour.interface';


// Define Mongoose schema
const tourSchema = new Schema<ITour>({
    name: { type: String, required: [true, 'Name is required'] },
    durationHours: { type: Number, required: [true, 'Duration is required'] },
    ratingAverage: { type: Number },
    ratingQuantity: { type: Number },
    price: { type: Number, required: [true, 'Price is required'] },
    imageCover: { type: String, required: [true, 'Cover image is required'] },
    images: { type: [String], required: [true, 'Images are required'] },
    createdAt: { type: Date, default: Date.now() },
    startDates: [Date],
    startLocation: { type: String, required: [true, 'Start location is required'] },
    locations: [String],
    slug: String,
});

// Create and export Mongoose model
const TourModel = mongoose.model<ITour>('Tour', tourSchema);

export { TourModel };
