import { Router } from "express";

import SessionController from "../controllers/sessionsController.js";

import auth from "../middlewares/auth.js";

const sessionRouter = Router();

sessionRouter.post("/login", SessionController.login);

sessionRouter.post("/signup", SessionController.signup);

sessionRouter.get("/logout", auth, SessionController.logout);

sessionRouter.post("/forgotPassword", SessionController.forgotPassword);

sessionRouter.post("/resetPassword", SessionController.resetPassword);

sessionRouter.get("/current", auth, SessionController.current);

export default sessionRouter;
