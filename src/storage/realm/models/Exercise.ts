export class Exercise extends Realm.Object<Exercise> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  description!: string;
  muscleGroup!: string;
  // reps!: number;
  // sets!: number;
  static schema = {
    name: 'Exercise',
    primaryKey: '_id',

    properties: {
      _id: 'objectId',
      name: 'string',
      description: 'string',
      muscleGroup: 'string',
    },
  };
}

// export const exerciseContext = createRealmContext({
//   schema: [Exercise],
//   onFirstOpen(realm) {
//     realm.create('Exercise', {
//       _id: new Realm.BSON.ObjectId(),
//       name: 'Bench Press',
//       description: 'Something something',
//       muscleGroup: 'Mid section',
//     });
//     realm.create('Exercise', {
//       _id: new Realm.BSON.ObjectId(),
//       name: 'Over head Press',
//       description: 'Something something',
//       muscleGroup: 'Chest section',
//     });
//     realm.create('Exercise', {
//       _id: new Realm.BSON.ObjectId(),
//       name: 'Barbell Squat',
//       description: 'Something something',
//       muscleGroup: 'Upper legs',
//     });
//   },
// });
