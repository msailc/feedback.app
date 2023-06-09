import { Request, Response } from 'express';
import ItemService from '../services/item.service';

class ItemController {
    async getAllItems(req: Request, res: Response) {
        const items = await ItemService.getAllItems();
        res.json(items);
    }

    async getItemReviews(req: Request, res: Response) {
        const id = Number(req.params.id);
        const item = await ItemService.getItemById(id);
        res.json(item);
    }
}

export default new ItemController();
