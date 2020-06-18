import BookService from '../../service/bookService/index';

type params = {

}

export default class BookController {
    static async getList(params?: params) {
        const data= await BookService.getList();
        return data;
    }

    static async getAuthorByBookID(params?: params) {
        const data= await BookService.getAuthorByBookID();
        return data;
    }
}