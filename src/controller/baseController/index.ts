/**
 * 控制器 基类
 * 所有控制类都应该继承 此类
 * 可以进行扩展 和 方法改写
 */

 

export default class baseController {
    private querystring

    constructor(){}
    // 查询单条数据 详情
    async findOne() { }
    // 查询数据列表
    async findList() { }
    // 创建单条数据
    async createOne() { }
    // 修改 单条数据
    async updateOne() { }
    // 删除单条数据
    async deleteOne() { }
}