import mongoose from 'mongoose';

const WeightLogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  weight_kg: {
    type: Number,
    required: true
  },
  log_date: {
    type: Date,
    required: true
  }
}, { timestamps: true });

const Weight = mongoose.model('Weight', WeightLogSchema);

export default Weight;

