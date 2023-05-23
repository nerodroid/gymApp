import {Schedule} from '../models/Schedule';
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

const scheduleActions = {
  getAllSchedules: (): any => {
    try {
      return getRealmInstance().objects('Schedule');
    } catch (err) {
      console.log('err', err);
    }
  },
  getScheduleById: (id: Realm.BSON.ObjectId): any => {
    try {
      return getRealmInstance().objectForPrimaryKey('Schedule', id);
    } catch (err) {
      console.log('err', err);
    }
  },
  deleteSchedule: (schedule: Schedule): any => {
    getRealmInstance().write(() => {
      getRealmInstance().delete(schedule);
    });
  },

  addSchedule: (schedule: ScheduleItem): any => {
    console.log('addSchedule');
    try {
      getRealmInstance().write(() => {
        getRealmInstance().create('Schedule', schedule);
      });
    } catch (err) {
      console.log('err', err);
    }
  },

  updateSchedule: async (schedule: Schedule): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        getRealmInstance().write(() => {
          getRealmInstance().create(
            'Schedule',
            schedule,
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

export default scheduleActions;
