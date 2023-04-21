import likesModel from "./likes-model.js"

export const findAllLikes = async () => {
    const likes = await likesModel.find();
    return likes;
};

export const createLike = async (like) => {
    const newLike = await likesModel.create(like);
    return newLike;
}

export const updateLike = async (id, like) => {
    const status = await likesModel.updateOne({_id: id}, like);
    return status;
}

