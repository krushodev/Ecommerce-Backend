import { Router } from "express";

import UserController from "../controllers/usersController.js";

import auth from "../middlewares/auth.js";
import authorization from "../middlewares/authorization.js";

import uploader from "../../helper/uploader.js";

const usersRouter = Router();

usersRouter.use(auth);

usersRouter.get("/premium", UserController.changePremium);

usersRouter.post("/documents", uploader.array("documents", 4), UserController.insertDocuments);

usersRouter.get("/", authorization("user:list"), UserController.get);

usersRouter.get("/:uid", authorization("user:get"), UserController.getOne);

usersRouter.post("/", authorization("user:create"), UserController.post);

usersRouter.put("/:uid", authorization("user:update"), UserController.put);

usersRouter.delete("/:uid", authorization("user:delete"), UserController.delete);

export default usersRouter;
