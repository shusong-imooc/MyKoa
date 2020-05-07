import { User, Books } from '../../models/index'
type params = {}

export default class BookService {
    static async getList(params?: params) {
        const users = await Books.findAll({
            include: [{
                attributes:{exclude:['password','created_at']},
                model:User,
                as:'author'
            }]
        });
        return users;
    }
}