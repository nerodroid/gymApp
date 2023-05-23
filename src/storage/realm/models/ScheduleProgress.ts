import {Schedule} from './Schedule';
import {WorkoutProgress} from './WorkoutProgress';

export class ScheduleProgress extends Realm.Object<ScheduleProgress> {
  _id!: Realm.BSON.ObjectId;
  schedule!: Schedule;
  date!: Date;
  workoutProgresses!: WorkoutProgress[];

  static schema = {
    name: 'ScheduleProgress',
    primaryKey: '_id',

    properties: {
      _id: 'objectId',
      date: 'date',
      schedule: 'Schedule',
      workoutProgresses: 'WorkoutProgress[]',
    },
  };
}
