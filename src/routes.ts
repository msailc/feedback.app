import { Router } from 'express';
import itemController from "./controllers/item.controller";
import userController from "./controllers/user.controller";

const router = Router();

router.get('/items', itemController.getAllItems);
router.get('/items/:id', itemController.getItemById);

router.get('/users/:id', userController.getUserById);

router.post('/register', userController.register);
router.post('/login', userController.login);

export default router;
