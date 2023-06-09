import { Request, Response } from 'express';
import UserService from "../services/user.service";
import ItemService from "../services/item.service";
import ReviewService from "../services/review.service";

class ReviewController {
    async createReview(req: Request, res: Response) {
        const { userId, itemId, comment, grade } = req.body;

        try {
            const user = await UserService.getUserById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const item = await ItemService.getItemById(itemId);
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }

            const review = await ReviewService.createReview(userId, itemId, comment, grade);

            return res.status(201).json(review);
        } catch (error) {
            console.error('Error creating review:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default new ReviewController();
