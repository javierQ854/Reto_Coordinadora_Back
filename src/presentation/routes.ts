import { Router } from "express";
import { UserController } from "../Controllers/UserController";

const router = Router()

router.post("/users/Register", UserController.register);
router.post("/users/login", UserController.login);
export {router} 