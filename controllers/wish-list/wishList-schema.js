import mongoose from "mongoose";
const wishListSchema = new mongoose.Schema(
  {
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    productId: String,
  },
  { collection: "wishlist" }
);
export default wishListSchema;