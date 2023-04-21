import * as likesDao from "./likes-dao.js"
import likesJson from "./likes.js"
import {createLike} from "./likes-dao.js";
//let likes = likesJson;
function LikesController(app) {
    const findAllLikes = async (req, res) => {
        const likes = await likesDao.findAllLikes()
        res.json(likes);
    }


    const updateLike = async (req, res) => {
        const likeToUpdate = req.params._id;
        const updates = req.body;
        const status = await likesDao.updateLike(likeToUpdate, updates);
        res.json(status);

    }

    const createLike = async (req, res) => {
        //newTuit._id = (new Date()).getTime()+''; id create by database
        //tuits.push(newTuit);
        const inserted = await likesDao.createLike(req.body);
        res.json(inserted); //respond with new tuit
    }


    app.get("/api/likes", findAllLikes);
    app.put('/api/likes/:_id', updateLike);
    app.post('/api/likes', createLike);

}


/*const createLike = async (req, res) => {
    const newLike = req.body;
    newLike.likes = 1;
    const insertedLike = await likesDao.createLike(newLike);
    res.json(insertedLike);
}

const updateLike = async (req, res) => {
    const likeId = req.params._id;
    const update = req.body;
    const status = await likesDao.updateLike(likeId, update);
    res.json(status);
}*/
/*const UserController = (app) => { app.get('/api/likes', findLikes) }

const findLikes = (req, res) => { res.json(likes) }*/

export default LikesController;
