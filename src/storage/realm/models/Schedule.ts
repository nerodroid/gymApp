import {Workout} from './Workout';

export class Schedule extends Realm.Object<Schedule> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  description!: string;
  workouts!: Workout[];

  static schema = {
    name: 'Schedule',
    primaryKey: '_id',

    properties: {
      _id: 'objectId',
      name: 'string',
      description: 'string',
      workouts: 'Workout[]',
    },
  };
}
