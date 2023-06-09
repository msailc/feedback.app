import { Router } from 'express';
import itemController from "./controllers/item.controller";
import userController from "./controllers/user.controller";
import reviewController from "./controllers/review.controller";

const router = Router();

router.get('/items', itemController.getAllItems); // get all items with their data (there is no need to get all reviews for each item)
router.get('/items/:id/reviews', itemController.getItemReviews); // get all reviews for an item with its data

router.get('/users/:id', userController.getUserById);

router.post('/register', userController.register);
router.post('/login', userController.login);

router.post('/reviews', reviewController.createReview); // create a review for an item by a logged-in user

export default router;
