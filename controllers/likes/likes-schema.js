import mongoose from "mongoose";
const likesSchema = mongoose.Schema(
    {
        product_id: Number,
        likes: Number,
        dislikes: Number
    },
    {collection:"likes"}
);
export default likesSchema;