import wishListModel from "./wishList-model.js";

export const userAddWishList = async (userId, productId) => {
  return await wishListModel.create({ userId, productId });
};

export const findWishListByUserId = async (userId) => {
  return wishListModel.find({ userId });
}

export const findWishListByUserIdAndPID = async (userId, productId) => {
  return wishListModel.findOne({ userId, productId });
}