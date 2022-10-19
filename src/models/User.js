import { Schema, model, Types } from 'mongoose';

const UserSchema = new Schema({
  fullname: { type: String },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    maxLength: 16,
  },
  password: { type: String, required: true, minLength: 8 },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(v);
      },
      message: props => `${props.value} is not a valid email`,
    },
    unique: true,
  },
  role: { type: String, enum: ['admin', 'user'] },
});

const User = models.User || model('User', UserSchema);

export default User;
