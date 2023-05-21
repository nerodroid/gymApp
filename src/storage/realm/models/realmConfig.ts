import {createRealmContext} from '@realm/react';
import {Exercise} from './Exercise';
import {Schedule} from './Schedule';
import {Workout} from './Workout';

export const gymAppContext = createRealmContext({
  schema: [Exercise, Schedule, Workout],
  onFirstOpen(realm) {
    realm.create('Exercise', {
      _id: new Realm.BSON.ObjectId(),
      name: 'Bench Press',
      description: 'Something something',
      muscleGroup: 'Mid section',
    });
    realm.create('Exercise', {
      _id: new Realm.BSON.ObjectId(),
      name: 'Over head Press',
      description: 'Something something',
      muscleGroup: 'Chest section',
    });
    realm.create('Exercise', {
      _id: new Realm.BSON.ObjectId(),
      name: 'Barbell Squat',
      description: 'Something something',
      muscleGroup: 'Upper legs',
    });
  },
});
