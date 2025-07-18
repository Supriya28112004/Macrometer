import mongoose from 'mongoose';

const WaterLogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  quantity_ml: {
    type: Number,
    required: true
  },
  log_date: {
    type: Date,
    required: true
  }
}, { timestamps: true });

const Water = mongoose.model('Water', WaterLogSchema);

export default Water;

