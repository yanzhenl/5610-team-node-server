import * as commentsDao from "./comments-dao.js"

function CommentsController(app) {
    const findAllComments = async (req, res) => {
        const comments = await commentsDao.findAllComments()
        res.json(comments);
    }

    const createComment = async (req, res) => {
        //newTuit._id = (new Date()).getTime()+''; id create by database
        //tuits.push(newTuit);
        const inserted = await commentsDao.createComment(req.body);
        res.json(inserted); //respond with new tuit
    }

    app.get("/api/comments", findAllComments);
    app.post('/api/comments', createComment);


}

export default CommentsController;
