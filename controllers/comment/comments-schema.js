import mongoose from "mongoose";
const commentsSchema = mongoose.Schema(
    {
        product_id: Number,
        user_id: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
        content: String
    },
    {collection:"comments"}
);
export default commentsSchema;