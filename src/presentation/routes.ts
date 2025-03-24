import { Router } from "express";
import { UserController } from "../Controllers/UserController";
import { ShipmentController } from "../Controllers/ShipmentController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { EmailController } from "../Controllers/EmailController";
const router = Router()

router.post("/users/Register", UserController.register);
router.post("/users/login", UserController.login);
router.get("/users/Envios",authMiddleware,ShipmentController.getEnviosUser);
router.get("/users/Envios/:id",authMiddleware,ShipmentController.getEnviosIdUser);
router.post("/users/Envios/:id",authMiddleware,ShipmentController.postEnviosUser)
router.post("/users/Envio/Correo",authMiddleware,EmailController.sendEmail)
export {router} 