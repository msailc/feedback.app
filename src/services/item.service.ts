import Item from '../models/item.model';
import Review from '../models/review.model';
import sequelize from "sequelize";

class ItemService {
    async getAllItems() {
        return Item.findAll({
            attributes: {
                include: [[sequelize.fn('COUNT', sequelize.col('reviews.id')), 'reviewCount']],
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
                include: [[sequelize.fn('COUNT', sequelize.col('reviews.id')), 'reviewCount']],
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
                },
            ],
            attributes: {
                include: [[sequelize.fn('COUNT', sequelize.col('reviews.id')), 'reviewCount']],
            },
        });
    }

}

export default new ItemService();
