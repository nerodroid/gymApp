import {Exercise} from '../models/Exercise';
import {Schedule} from '../models/Schedule';
import {Workout} from '../models/Workout';

export const getRealmInstance = (): Realm => {
  const realmInstance = new Realm({schema: [Exercise, Schedule, Workout]});
  //console.log('realmInstance', !!realmInstance);
  // if (!realmInstance) {
  //   realmInstance = new Realm();
  // }

  return realmInstance;
};
