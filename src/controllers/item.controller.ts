import { Request, Response } from 'express';
import ItemService from '../services/item.service';

class ItemController {
    async getAllItems(req: Request, res: Response) {
        const itemType = req.query.type; // Get the value of the "type" query parameter
        let items;

        if (itemType === 'club') {
            items = await ItemService.getItemsByType('club');
        } else if (itemType === 'restaurant') {
            items = await ItemService.getItemsByType('restaurant');
        } else if (itemType === 'hotel') {
            items = await ItemService.getItemsByType('hotel');
        } else if (itemType === 'tour') {
            items = await ItemService.getItemsByType('tour');
        } else {
            items = await ItemService.getAllItems();
        }

        res.json(items);
    }

    async getItem(req: Request, res: Response) {
        const id = Number(req.params.id);
        const item = await ItemService.getItem(id);
        res.json(item);
    }
}

export default new ItemController();
