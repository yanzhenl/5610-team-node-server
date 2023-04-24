import mongoose from "mongoose";
import wishListSchema from "./wishList-schema.js";
const wishListModel = mongoose.model("wishlist", wishListSchema);
export default wishListModel;