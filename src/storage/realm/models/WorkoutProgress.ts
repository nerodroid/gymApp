import {Exercise} from './Exercise';

export class WorkoutProgress extends Realm.Object<WorkoutProgress> {
  _id!: Realm.BSON.ObjectId;
  exercise!: Exercise;
  reps!: number;
  sets!: number;
  weightAmounts!: string[];
  index!: number;

  static schema = {
    name: 'WorkoutProgress',
    primaryKey: '_id',

    properties: {
      _id: 'objectId',
      exercise: 'Exercise',
      weightAmounts: 'string[]',
      reps: 'int',
      sets: 'int',
      index: 'int',
    },
  };
}
