import Review from "../models/review.model";

class ReviewService {
    async createReview(userId: number, itemId: number, comment: string, grade: number) {
        return Review.create({
            id: 0,
            userId,
            itemId,
            comment,
            grade,
        });
    }
}

export default new ReviewService();
