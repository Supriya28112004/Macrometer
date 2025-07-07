import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'enter the email'],
    unique: true,
    match: [/.+\@.+\..+/, 'enter the  valid email address']
  },
  password: {
    type: String,
    required: [true, 'provide a password'],
    minlength: 6,
    select: false
  },
  name: {
    type: String,
    required: [true, 'provide a name']
  },
  target_calories: { type: Number, default: 2000 },
  target_protein: { type: Number, default: 150 },
  target_carbs: { type: Number, default: 200 },
  target_fat: { type: Number, default: 70 },
  target_water: { type: Number, default: 3000 },
}, { timestamps: true });

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password method
UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User;
