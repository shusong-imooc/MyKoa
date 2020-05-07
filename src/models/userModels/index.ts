import { Op } from 'sequelize';
import { Scopes } from 'sequelize-typescript';
import { Users as UsersBaseModel } from '../../baseModels/Users.model'
@Scopes(() => ({
    del: {
        where: {
            nickname:''
        }
      }
}))
export default class User extends UsersBaseModel {
    
}