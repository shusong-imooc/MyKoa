import sequelize from '../config/db';
import User from './userModels/index';
import Books from './bookModel/index';

sequelize.addModels([User, Books]);

// 公共定义关联关系
User.hasMany(Books,{as:'Books',foreignKey: 'author_id',constraints: false});
Books.belongsTo(User,{as:'author',foreignKey: 'author_id',constraints: false});

export {
    User,
    Books
}