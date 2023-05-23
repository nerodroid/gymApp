import {Exercise} from '../models/Exercise';
import {getRealmInstance} from './realmActions';

// const {useRealm, useQuery} = exerciseContext;

// export const useRealmInstance = () => {
//   const realm = useRealm();
//   return realm;
// };
export interface ExerciseItem {
  _id: Realm.BSON.ObjectId;
  name: string;
  description: string;
  muscleGroup: string;
}

const exerciseActions = {
  getAllExercises: (): any => {
    return getRealmInstance().objects('Exercise');
  },
  getExerciseById: (id: string): any => {
    // console.log(getRealmInstance().objectForPrimaryKey('Exercise', id));
    return getRealmInstance().objectForPrimaryKey('Exercise', id);
  },
  deleteExercise: (exercise: ExerciseItem): any => {
    getRealmInstance().write(() => {
      getRealmInstance().delete(exercise);
    });
  },

  addExercise: (exercise: ExerciseItem): any => {
    getRealmInstance().write(() => {
      getRealmInstance().create('Exercise', exercise);
    });
  },

  updateExercise: (exercise: ExerciseItem): any => {
    // console.log(exercise);

    const tempObject = getRealmInstance().objectForPrimaryKey(
      'Exercise',
      exercise._id,
    );

    getRealmInstance().write(() => {
      getRealmInstance().create(
        'Exercise',
        exercise,
        Realm.UpdateMode.Modified,
      );
    });
    console.log(tempObject);
    return;
    // const objectToUpdate = getRealmInstance()
    //   .objects('Exercise')
    //   .filtered(`id = "${exercise._id}"`);
    // console.log(objectToUpdate);
    //console.log(objectToUpdate);

    // console.log(typeof objectToUpdate);

    // if (tempItem) {
    //   getRealmInstance().write(() => {
    //     tempItem.name = 'Updated';
    //   });
    // }
    // return new Promise((resolve, reject) => {
    //   try {
    //     getRealmInstance().write(() => {
    //       getRealmInstance().create(
    //         'Exercise',
    //         exercise,
    //         Realm.UpdateMode.Modified,
    //       );
    //     });
    //     resolve(true);
    //   } catch (err) {
    //     reject(err);
    //   }
    // });
  },

  // useGetAllExercises: (): any => {
  //   const realm = useRealmInstance();
  //   const exercises = realm.objects('Exercise');

  //   //const exercises = useQuery(Exercise);
  //   return exercises;
  // },
  // useAddExercise: (exercise: Exercise): any => {
  //   const realm = useRealmInstance();
  //   realm.write(() => {
  //     realm.create('Exercise', exercise);
  //   });
  // },
  // useDeleteExercise: (exercise: Exercise): any => {
  //   const realm = useRealmInstance();
  //   realm.write(() => {
  //     realm.delete(exercise);
  //   });
  // },
  // useDeleteExerciseById: (id: Realm.BSON.ObjectId): any => {
  //   const realm = useRealmInstance();
  //   const exercise = realm.objectForPrimaryKey('Exercise', id);
  //   realm.write(() => {
  //     realm.delete(exercise);
  //   });
  // },

  // useGetExerciseById: (id: string): any => {
  //   const realm = useRealmInstance();
  //   const exercise = realm.objectForPrimaryKey('Exercise', id);
  //   return exercise;
  // },
};

export default exerciseActions;
