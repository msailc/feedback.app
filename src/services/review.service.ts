import Review from "../models/review.model";

class ReviewService {
    async createReview(userId: number, itemId: number, grade: number) {
        return Review.create({
            id: 0,
            userId,
            itemId,
            grade,
        });
    }
}

export default new ReviewService();
