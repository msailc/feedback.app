import Item from '../models/item.model';

class ItemService {
    async getAllItems() {
        return Item.findAll();
    }

    async getItemById(id: number) {
        return Item.findByPk(id);
    }
}

export default new ItemService();
