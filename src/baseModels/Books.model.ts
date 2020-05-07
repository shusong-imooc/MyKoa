import { Model, Table, Column, AllowNull, AutoIncrement, Unique, Default, PrimaryKey, Comment, DataType } from 'sequelize-typescript';

@Table({ tableName: 'books', timestamps: false })
export class Books extends Model<Books> {

  @Comment('')
  @AllowNull(false)
  @PrimaryKey
  @Column
  id: number;

  @Comment('')
  @AllowNull(true)
  @Column
  name?: string;

  @Comment('')
  @AllowNull(true)
  @Column
  author_id?: number;

}
