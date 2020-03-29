import {
  Table,
  Column,
  Model,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';

import User from './user';

@Table({ tableName: 'event' })
class Event extends Model<Event> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  start_time: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  end_time: Date;

  @CreatedAt
  date_created: Date;

  @UpdatedAt
  date_modified: Date;

  @DeletedAt
  date_deleted: Date;

  @BelongsTo(() => User)
  user: User[];
}

export default Event;
