import { Goods } from './goods.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Goods)
export class GoodsRepository extends Repository<Goods> {
    getAllGoods() {
        return this.find();
    }

    async addNewGood(title: string, price: string): Promise<Goods> {
        const good = new Goods();
        good.price = price;
        good.title = title;
        return await good.save();
    }

    async deleteGood(id: number) {
        return await this.delete(id);
    }

    async getById(id: number) {
        return await this.findOne(id);
    }
}
