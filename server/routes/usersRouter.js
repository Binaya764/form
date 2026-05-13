const {Router} = require("express");
const usersRouter = Router();

usersRouter.get("/",(req,res)=>{
    res.send("Hello worlde");
});

module.exports = usersRouter;