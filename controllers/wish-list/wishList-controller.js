import * as wishListDao from "./wishList-dao.js";
const WishListController = (app) => {
  const userAddWishList = async (req, res) => {
    const userId = req.params.uid;
    const productId = req.params.aid;
    const wishList = await wishListDao.userAddWishList(userId, productId);
    res.json(wishList);
  };
  app.post("/api/users/:uid/wishlist/product/:pid", userAddWishList);
};
export default WishListController;