const {Router} = require("express");
const usersController = require("../controllers/usersController")
const usersRouter = Router();

usersRouter.get("/", usersController.usersListGet);

usersRouter.get("/", usersController.usersCreateGet);
usersRouter.post("/", usersController.usersCreatePost);

module.exports = usersRouter;