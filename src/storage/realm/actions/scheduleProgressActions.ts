import {ScheduleProgressItem} from '@gym-app/modules/workout/screens/todayWorkout/todayWorkoutScreen';

import {ScheduleProgress} from '../models/ScheduleProgress';
import {ExerciseItem} from './exerciseActions';
import {getRealmInstance} from './realmActions';

export interface WorkoutItem {
  _id: Realm.BSON.ObjectId;
  exercise: ExerciseItem;
  index: number;
  reps: number;
  sets: number;
}
export interface ScheduleItem {
  _id: Realm.BSON.ObjectId;
  name: string;
  description: string;
  workouts: Array<WorkoutItem>;
}

const ScheduleProgressActions = {
  getAllScheduleProgresses: (): any => {
    try {
      return getRealmInstance().objects('ScheduleProgress');
    } catch (err) {
      console.error('err', err);
    }
  },
  getScheduleProgressById: (id: string): any => {
    try {
      return getRealmInstance().objectForPrimaryKey('ScheduleProgress', id);
    } catch (err) {
      console.log('err', err);
    }
  },
  deleteScheduleProgress: (scheduleProgress: ScheduleProgress): any => {
    getRealmInstance().write(() => {
      getRealmInstance().delete(scheduleProgress);
    });
  },

  addScheduleProgress: (scheduleProgress: ScheduleProgressItem): any => {
    //console.log('addScheduleProgress', scheduleProgress);
    try {
      getRealmInstance().write(() => {
        getRealmInstance().create('ScheduleProgress', scheduleProgress);
      });
    } catch (err) {
      console.error('err', err);
    }
  },

  updateScheduleProgress: async (
    scheduleProgress: ScheduleProgress,
  ): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        getRealmInstance().write(() => {
          getRealmInstance().create(
            'ScheduleProgress',
            scheduleProgress,
            Realm.UpdateMode.Modified,
          );
        });
        resolve(true);
      } catch (err) {
        reject(err);
      }
    });
  },
};

export default ScheduleProgressActions;
