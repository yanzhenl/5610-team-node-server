import mongoose from "mongoose";
const wishListSchema = new mongoose.Schema(
  {
    userId: String,
    productId: String,
  },
  { collection: "wishlist" }
);
export default wishListSchema;