import * as usersDao from "./users-dao.js";

//let currentUser = null;

function UsersController(app) {
    const findAllUsers = async (req, res) => {
        const users = await usersDao.findAllUsers();
        res.send(users);
    };

    const findUserById = async (req, res) => {
        const id = req.params.id;
        const user = await usersDao.findUserById(id);
        res.send(user);
    };

    const deleteUserById = async (req, res) => {
        const id = req.params.id;
        const status = await usersDao.deleteUser(id);
        res.json(status);
    };


    const createUser = async (req, res) => {
        const user = await usersDao.createUser(req.body);
        res.json(user);
    };

    const updateUser = async (req, res) => {
        const id = req.params.id;
        const status = await usersDao.updateUser(id, req.body);
        req.session["currentUser"] = await usersDao.findUserById(id);
        res.json(status);
    };

    const login = async (req, res) => {
        const user = req.body;
        console.log(user);
        const foundUser = await usersDao.findUserByCredentials(
            req.body.username,
            req.body.password,
        );
        console.log(foundUser);
        if (foundUser) {
            req.session["currentUser"] = foundUser;
            //currentUser = foundUser;
            res.send(foundUser);
        } else {
            res.sendStatus(404);
        }
    };
    const logout = async (req, res) => {
        req.session.destroy();
        //currentUser = null;
        res.sendStatus(204);
    };

    const profile = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (currentUser) {
            res.send(currentUser);
        } else {
            res.sendStatus(404);
        }
    };

    const templateUser = {
        profilePicture: "../../images/default-profile.png",
        bannerPicture: "../../images/default-banner.jpeg",
        bio: "Share something to let people know more about you.",
        dateJoined: formatDate(new Date()),
        followingCount: 0,
        followersCount: 0,
        editing: false, 
        opened: true,
    }

    function formatDate(date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        var formattedDate = ('0' + month).slice(-2) + '/' + ('0' + day).slice(-2) + '/' + year;
        return formattedDate;
    }

    const register = async (req, res) => {
        const user = {
            ...req.body,
            ...templateUser
        };
        const foundUser = await usersDao.findUserByUsername(req.body.username);
        if (foundUser) {
            res.sendStatus(409);
        } else {
            user.role = user.firstName && user.lastName ? "CONSUMER" : "FARMER";
            const newUser = await usersDao.createUser(user);
            req.session["currentUser"] = newUser;
            //currentUser = newUser;
            res.json(newUser);
        }
    };


    app.post("/api/users/login", login);
    app.post("/api/users/logout", logout);
    app.get("/api/users/profile", profile);
    app.post("/api/users/register", register);

    app.get("/api/users", findAllUsers);
    app.get("/api/users/userId/:id", findUserById);
    app.delete("/api/users/:id", deleteUserById);
    app.post("/api/users", createUser);
    app.put("/api/users/:id", updateUser);
}

export default UsersController;

