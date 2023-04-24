import wishListModel from "./wishList-model.js";

export const userAddWishList = async (userId, productId) => {
  return await wishListModel.create({ userId, productId });
};