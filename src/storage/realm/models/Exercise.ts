import {Realm} from '@realm/react';
import {createRealmContext} from '@realm/react';

export class Exercise extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  description!: string;
  muscleGroup!: string;
  //   reps!: number;
  //   sets!: number;
  static schema = {
    name: 'Exercise',
    properties: {
      _id: 'objectId',
      name: 'string',
      description: 'string',
      muscleGroup: 'string',
    },
  };
}

export const exerciseContext = createRealmContext({
  schema: [Exercise],
  onFirstOpen(realm) {
    realm.create('Exercise', {
      _id: new Realm.BSON.ObjectId(),
      name: 'Bench Press',
      description: 'Something something',
      muscleGroup: 'Mid section',
    });
  },
});
