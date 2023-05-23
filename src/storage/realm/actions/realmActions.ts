import {Exercise} from '../models/Exercise';
import {Schedule} from '../models/Schedule';
import {ScheduleProgress} from '../models/ScheduleProgress';
import {Workout} from '../models/Workout';
import {WorkoutProgress} from '../models/WorkoutProgress';

export const getRealmInstance = (): Realm => {
  const realmInstance = new Realm({
    schema: [Exercise, Schedule, Workout, ScheduleProgress, WorkoutProgress],
  });
  //console.log('realmInstance', !!realmInstance);
  // if (!realmInstance) {
  //   realmInstance = new Realm();
  // }

  return realmInstance;
};
