import {Exercise} from './Exercise';

export class Workout extends Realm.Object<Workout> {
  _id!: Realm.BSON.ObjectId;
  exercise!: Exercise;
  reps!: number;
  sets!: number;
  index!: number;

  static schema = {
    name: 'Workout',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      exercise: 'Exercise',
      reps: 'int',
      sets: 'int',
      index: 'int',
    },
  };
}
