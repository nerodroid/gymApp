import {View, Text, Button} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import styles from './addSchedule.styles';
import {useEffect, useRef, useState} from 'react';
import scheduleActions, {
  ScheduleItem,
  WorkoutItem,
} from '@gym-app/storage/realm/actions/scheduleActions';

import SelectDropdown from 'react-native-select-dropdown';
import exerciseActions, {
  ExerciseItem,
} from '@gym-app/storage/realm/actions/exerciseActions';
import * as Yup from 'yup';

import {Schedule} from '@gym-app/storage/realm/models/Schedule';
import TextInputDark from '@gym-app/shared/textInput/textInputDark';
import {Formik, FormikHelpers, useFormik} from 'formik';
import LinearGradient from 'react-native-linear-gradient';
import {validationSchema} from '@gym-app/validators/yup';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AddSchedule = () => {
  const [scheduleName, setScheduleName] = useState('');
  const [scheduleDescription, setScheduleDescription] = useState('');

  const [selectedWorkouts, setSelectedWorkouts] = useState<WorkoutItem[]>([]);

  const [selectedWorkout, setSelectedWorkout] = useState<ExerciseItem>();
  const [workoutSets, setWorkoutSets] = useState('');
  const [workoutReps, setWorkoutReps] = useState('');

  const [exercises, setExercises] = useState(exerciseActions.getAllExercises());

  const [dropDownOptions, setDropDownOptions] = useState<string[]>();
  const [selectedOption, setSelectedOption] = useState('');

  const [workoutIndex, setWorkoutIndex] = useState(0);
  useEffect(() => {
    const tempExerciseArray: string[] = [];

    exercises.map((exercise: {name: any}) => {
      tempExerciseArray.push(exercise.name);
    });
    setDropDownOptions(tempExerciseArray);
  }, [exercises]);

  const handleValueChange = (value: any) => {
    setSelectedOption(value);
    const tempExercise = exercises.find(
      (exercise: {name: any}) => exercise.name === value,
    );

    setSelectedWorkout(tempExercise);
  };

  const getWorkoutIndex = () => {
    const currentIndex = workoutIndex;
    setWorkoutIndex(workoutIndex + 1);
    return currentIndex;
  };
  const handleAddWorkout = () => {
    if (!selectedWorkout) {
      return;
    }
    const tempWorkout: WorkoutItem = {
      _id: new Realm.BSON.ObjectId(),
      exercise: selectedWorkout,
      index: getWorkoutIndex(),
      reps: parseInt(workoutReps),
      sets: parseInt(workoutSets),
    };

    setSelectedWorkouts([...selectedWorkouts, tempWorkout]);
    setWorkoutReps('');
    setWorkoutSets('');
  };

  const handleAddSchedule = () => {
    const tempSchedule: ScheduleItem = {
      _id: new Realm.BSON.ObjectId(),
      name: scheduleName,
      description: scheduleDescription,
      workouts: selectedWorkouts,
    };
    scheduleActions.addSchedule(tempSchedule);
    console.log(tempSchedule);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      exercise: '',
      sets: '',
      reps: '',
    },
    validationSchema,
    onSubmit: (values: any) => {
      // if (submitAction === 'AddExercise') {
      //   console.log(submitAction, values);
      // } else {
      //   console.log(submitAction, values);
      // }
    },
  });

  const formValidationSchema = Yup.object({
    name: Yup.string().required('Schedule Name is required'),
    description: Yup.string().required('Schedule description is required'),
    sets: Yup.number()
      .max(999, 'Must be less than 999')
      .min(1, 'Must be greater than 1')
      .typeError('Must be a valid number')
      .required('This field is required'),

    reps: Yup.number()
      .max(999, 'Must be less than 999')
      .min(1, 'Must be greater than 1')
      .typeError('Must be a valid number')
      .required('This field is required'),
  });
  let submitAction: string | undefined = undefined;
  const handleSubmission = (values: any) => {
    console.log(values, submitAction, selectedWorkout);
  };

  return (
    <View>
      <Text style={styles.title}>Add a Schedule</Text>
      <Formik
        initialValues={formik.initialValues}
        onSubmit={handleSubmission}
        validationSchema={formValidationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <Text style={styles.textTitle}>Name</Text>
            <View style={styles.textInputContainer}>
              <LinearGradient
                colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.3)']}
                start={{x: 0, y: 0}} // Top-left corner
                end={{x: 0, y: 1}} // Bottom-left corner
                style={[styles.mainContainer]}>
                <TextInput
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  style={styles.textInput}
                  cursorColor={'white'}
                />
              </LinearGradient>
            </View>
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}

            <Text style={styles.textTitle}>Description</Text>
            <View style={styles.textInputContainer}>
              <LinearGradient
                colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.3)']}
                start={{x: 0, y: 0}} // Top-left corner
                end={{x: 0, y: 1}} // Bottom-left corner
                style={[styles.mainContainer]}>
                <TextInput
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  value={values.description}
                  style={styles.textInput}
                  cursorColor={'white'}
                />
              </LinearGradient>
            </View>
            {touched.description && errors.description && (
              <Text style={styles.errorText}>{errors.description}</Text>
            )}
            <View style={{paddingTop: 10}}>
              <Text style={styles.textTitle}>Exercise</Text>
              <SelectDropdown
                data={dropDownOptions ? dropDownOptions : []}
                onSelect={selectedItem => handleValueChange(selectedItem)}
                //onSelect={selectedItem => (values.exercise = selectedItem)}
                defaultButtonText="Select an Exercise"
                buttonTextAfterSelection={selectedItem => selectedItem}
                searchInputStyle={{padding: 20}}
                buttonStyle={styles.dropdownButtonContainer}
                buttonTextStyle={{
                  color: 'black',
                  textAlign: 'left',
                  fontSize: 16,
                }}
                dropdownStyle={{backgroundColor: '#EFEFEF'}}
                rowStyle={styles.dropdownRow}
                rowTextStyle={styles.dropdownRowText}
                renderDropdownIcon={() => (
                  <Text style={styles.dropdownIcon}>▼</Text>
                )}
              />
            </View>
            {touched.exercise && errors.exercise && (
              <Text style={styles.errorText}>{errors.exercise}</Text>
            )}
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '50%'}}>
                <Text style={styles.textTitle}>Sets</Text>
                <View style={styles.textInputHalfContainer}>
                  <LinearGradient
                    colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.3)']}
                    start={{x: 0, y: 0}} // Top-left corner
                    end={{x: 0, y: 1}} // Bottom-left corner
                    style={[styles.mainContainer]}>
                    <TextInput
                      onChangeText={handleChange('sets')}
                      onBlur={handleBlur('sets')}
                      value={values.sets}
                      keyboardType="numeric"
                      style={styles.textInput}
                      cursorColor={'white'}
                    />
                  </LinearGradient>
                </View>
                {touched.sets && errors.sets && (
                  <Text style={styles.errorText}>{errors.sets}</Text>
                )}
              </View>
              <View style={{width: '50%'}}>
                <Text style={styles.textTitle}>Reps</Text>
                <View style={styles.textInputHalfContainer}>
                  <LinearGradient
                    colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.3)']}
                    start={{x: 0, y: 0}} // Top-left corner
                    end={{x: 0, y: 1}} // Bottom-left corner
                    style={[styles.mainContainer]}>
                    <TextInput
                      onChangeText={handleChange('reps')}
                      onBlur={handleBlur('reps')}
                      value={values.reps}
                      keyboardType="numeric"
                      style={styles.textInput}
                      cursorColor={'white'}
                    />
                  </LinearGradient>
                </View>
                {touched.reps && errors.reps && (
                  <Text style={styles.errorText}>{errors.reps}</Text>
                )}
              </View>
            </View>

            <View style={{width: 140, paddingTop: 20}}>
              <Button
                onPress={() => {
                  submitAction = 'AddExercise';

                  handleSubmit();
                }}
                title="Add Exercise"
              />
              <View style={{paddingTop: 5}}></View>
              <Button
                onPress={() => {
                  submitAction = 'AddSchedule';

                  handleSubmit();
                }}
                title="Add Schedule"
              />
            </View>
          </>
        )}

        {/* {formik.initialValues.text && (
      <Text style={styles.errorText}>{'formik.errors.name'}</Text>
    )} */}
      </Formik>
    </View>
  );
  return (
    <ScrollView style={styles.inputContainer}>
      <Text style={styles.title}>Add a Schedule</Text>
      <Text style={styles.subTitle}>Name</Text>

      <TextInputDark
        onSubmit={value => console.log('submit', value)}
        title={'Name'}
      />
      {/* <TextInput
        value={scheduleName}
        onChangeText={text => setScheduleName(text)}
        style={styles.textInput}
      />
      <Text style={styles.subTitle}>Desc</Text>
      <TextInput
        value={scheduleDescription}
        onChangeText={text => setScheduleDescription(text)}
        style={styles.textInput}
      /> */}
      <View style={{padding: 10}} />
      <Text style={styles.subTitle}>Workout Name</Text>
      {/* <SelectDropdown
        data={dropDownOptions ? dropDownOptions : []}
        onSelect={selectedItem => handleValueChange(selectedItem)}
        defaultButtonText="Select an Exercise"
        buttonTextAfterSelection={selectedItem => selectedItem}
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownButtonText}
        dropdownStyle={styles.dropdown}
        rowStyle={styles.dropdownRow}
        rowTextStyle={styles.dropdownRowText}
        renderDropdownIcon={() => <Text style={styles.dropdownIcon}>▼</Text>}
      /> */}
      <Text style={styles.subTitle}>Sets</Text>
      <TextInput
        value={workoutSets}
        onChangeText={text => setWorkoutSets(text)}
        style={styles.textInput}
      />
      <Text style={styles.subTitle}>Reps</Text>
      <TextInput
        value={workoutReps}
        onChangeText={text => setWorkoutReps(text)}
        style={styles.textInput}
      />
      <View style={{padding: 10}} />
      <Button
        title="Add a workout to schedule"
        onPress={() => handleAddWorkout()}
      />

      {selectedWorkouts?.map((workout: WorkoutItem) => {
        return (
          <View>
            <Text>{'Name: ' + workout.exercise.name}</Text>
            <Text>{'Reps: ' + workout.reps}</Text>
            <Text>{'Sets: ' + workout.sets}</Text>
          </View>
        );
      })}

      <View style={{padding: 10}} />
      <Button title="Add Schedule" onPress={() => handleAddSchedule()} />
    </ScrollView>
  );
};

export default AddSchedule;
