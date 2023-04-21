import commentsModel from "./comments-model.js";


export const findAllComments = async () => {
    const comments = await commentsModel.find();
    return comments;
};

export const createComment = async (comment) => {
    const newComment = await commentsModel.create(comment);
    return newComment;
}

