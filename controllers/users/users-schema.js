import mongoose from "mongoose";
const usersSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    businessName: String,
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    handle: String,
    profilePicture: String,
    bannerPicture: String,
    bio: String,
    location: String,
    dateOfBirth: String,
    dateJoined: String,
    followingCount: Number,
    followersCount: Number,
    editing: {type: Boolean, default: false},
    role: { type: String, required: true, enum: ["CONSUMER", "ADMIN", "FARMER"] },
    zipcode: String,
    opened: {type: Boolean, default: true},
    category_name: String
  },
  { collection: "users" }
);
export default usersSchema;
