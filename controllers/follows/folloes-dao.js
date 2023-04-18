import followsModel from "./follows-model";

export const userFollowsUser = async (follower, followed) => {
    return await followsModel.create({ follower, followed });
};

export const findFollowsByFollowerId = async (follower) => {
    return await followsModel({ follower });
};

export const findFollowsByFollowedId = async (followed) => {
    return await followsModel({ followed });
};

export const unfollowUser = async (follower, followed) => {
    return await followsModel.deleteOne({ follower, followed });
};

export const findFollowsByFollowerAndFollowedId = async (follower, followed) => {
    return await followsModel.findOne({ follower, followed });
};