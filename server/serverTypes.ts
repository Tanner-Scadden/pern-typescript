export interface Event {
  id?: number;
  user_id: number;
  start_time: Date;
  end_time: Date;
  date_created?: Date;
  date_modified?: Date;
  date_deleted?: Date;
}
export interface User {
  id?: number;
  first_name: string;
  last_name: string;
  date_created?: Date;
  date_modified?: Date;
  date_deleted?: Date;
}
