import * as wishListDao from "./wishList-dao.js";

const WishListController = (app) => {
  const userAddWishList = async (req, res) => {
    const userId = req.params.uid;
    const productId = req.params.pid;
    let wishList = await wishListDao.userAddWishList(userId, productId);
    if (wishList) {
      res.sendStatus(400);
      return;
    } else {
      wishList = await wishListDao.userAddWishList(userId, productId);
      res.json(wishList);
    }
  };

  const findWishListByUserId = async (req, res) => {
    const userId = req.params.uid;
    const wishList = await wishListDao.findWishListByUserId(userId);
    res.json(wishList);
  }

  app.post("/api/users/:uid/wishlist/:pid", userAddWishList);
  app.get("/api/users/:uid/wishlist", findWishListByUserId);
};
export default WishListController;