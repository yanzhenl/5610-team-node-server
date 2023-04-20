import followsModel from "./follows-model.js";

export const userFollowsUser = async (follower, followed) => {
    return await followsModel.create({ follower, followed });
};

export const findFollowsByFollowerId = async (follower) => {
    return await followsModel
      .find({ follower })
      .populate("followed")
      .exec();
};

export const findFollowsByFollowedId = async (followed) => {
    return await followsModel.find({ followed })
      .populate("follower")
      .exec();
};

export const unfollowUser = async (follower, followed) => {
    return await followsModel.deleteOne({ follower, followed });
};

export const findFollowsByFollowerAndFollowed = async (follower, followed) => {
    return await followsModel.findOne({ follower, followed });
};