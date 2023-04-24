import mongoose from "mongoose";

const wishListSchema = new mongoose.Schema(
  {
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    productId: Number,
  },
  { collection: "wishlist" }
);

export default wishListSchema;