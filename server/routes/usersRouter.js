const {router} = require("router");
const usersRouter = usersRouter();

usersRouter.get("/",(req,res)=>{
    res.send("Hello worlde");
});

exports.module = usersRouter;