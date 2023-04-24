import wishListModel from "./wishList-model.js";

export const userAddWishList = async (userId, productId) => {
  return wishListModel.create({ userId, productId });
};