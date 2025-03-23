import { Router } from "express";
import { UserController } from "../Controllers/UserController";
import { ShipmentController } from "../Controllers/ShipmentController";
import { authMiddleware } from "../middlewares/authMiddleware";
const router = Router()

router.post("/users/Register", UserController.register);
router.post("/users/login", UserController.login);
router.get("/users/Envios",authMiddleware,ShipmentController.getEnviosUser);
router.post("/users/Envios/:id",authMiddleware,ShipmentController.postEnviosUser)
export {router} 