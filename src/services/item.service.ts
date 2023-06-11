import Item from '../models/item.model';
import Review from '../models/review.model';
import sequelize from "sequelize";

class ItemService {
    async getAllItems() {
        return Item.findAll({
            attributes: {
                include: [[sequelize.fn('COUNT', sequelize.col('reviews.id')), 'reviewCount'],
                    [sequelize.fn('AVG', sequelize.col('reviews.grade')), 'averageRating']],
            },
            include: [
                {
                    model: Review,
                    as: 'reviews',
                    attributes: [],
                },
            ],
            group: ['item.id'],
        });
    }

    async getItemsByType(type: string) {
        return Item.findAll({
            where: { type },
            attributes: {
                include: [[sequelize.fn('COUNT', sequelize.col('reviews.id')), 'reviewCount'],
                    [sequelize.fn('AVG', sequelize.col('reviews.grade')), 'averageRating']],
            },
            include: [
                {
                    model: Review,
                    as: 'reviews',
                    attributes: [],
                },
            ],
            group: ['item.id'],
        });
    }

    async getItem(itemId: number) {
        return Item.findByPk(itemId, {
            include: [
                {
                    model: Review,
                    as: 'reviews',
                    attributes: [],
                },
            ],
            attributes: {
                include: [
                    [sequelize.fn('COUNT', sequelize.col('reviews.id')), 'reviewCount'],
                    [sequelize.fn('AVG', sequelize.col('reviews.grade')), 'averageGrade'],
                ],
            },
        });
    }


}

export default new ItemService();
