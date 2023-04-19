import * as followsDao from './follows-dao.js';

const FollowsController = (app) => {
    const userFollowsUser = async (req, res) => {
        const follower = req.params.follower;
        const followed = req.params.followed;
        let follow = await followsDao.findFollowsByFollowerAndFollowed(follower, followed);
        if (follow) {
            res.sendStatus(400);
            return;
        } else {
            follow = await followsDao.userFollowsUser(follower, followed);
            res.json(follow);
        }
    };
    const unfollowUser = async (req, res) => {
        const follower = req.params.follower;
        const followed = req.params.followed;
        const status = await followsDao.unfollowUser(follower, followed);
        res.json(status);
    };
    const findFollowsByFollowedId = async (req, res) => {
        const followed = req.params.followed;
        const follows = await followsDao.findFollowsByFollowedId(followed);
        res.json(follows);
    };
    const findFollowsByFollowerId = async (req, res) => {
        const follower = req.params.follower;
        const follows = await followsDao.findFollowsByFollowerId(follower);
        res.json(follows);
    };
    app.post  ("/api/users/:follower/follows/:followed", userFollowsUser);
    app.delete("/api/users/:follower/follows/:followed", unfollowUser);
    app.get   ("/api/users/:followed/follows", findFollowsByFollowedId);
    app.get   ("/api/users/:follower/follows", findFollowsByFollowerId);
};

export default FollowsController;