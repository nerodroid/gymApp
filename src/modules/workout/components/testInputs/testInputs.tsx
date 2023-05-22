import TextButton from '@gym-app/shared/textButton/textButton';
import {ExerciseItem} from '@gym-app/storage/realm/actions/exerciseActions';
import {WorkoutItem} from '@gym-app/storage/realm/actions/scheduleActions';
import {validateInputNumber} from '@gym-app/validators/yup';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Button,
  ToastAndroid,
} from 'react-native';
import {WorkoutProcessItem} from '../../screens/todayWorkout/todayWorkoutScreen';

export interface SetWeightsFormInput {
  set: number;
  value: string;
}

interface TextInputListProps {
  initialInputAmount: number;
  canChangeInputAmount?: boolean;
  workoutItem: WorkoutItem;
  onSubmit: (workoutProcessItem: WorkoutProcessItem) => void;
}

const TextInputList: React.FC<TextInputListProps> = ({
  initialInputAmount,
  canChangeInputAmount,
  workoutItem,
  onSubmit,
}) => {
  const [formInputs, setFormInputs] = useState<{set: number; value: string}[]>(
    [],
  );

  const [idCounter, setIdCounter] = useState(1);
  const [error, setError] = useState<string>();
  useEffect(() => {
    if (initialInputAmount > 0) {
      const initialInputs = Array.from(
        {length: initialInputAmount},
        (_, index) => ({
          set: index + 1,
          value: '',
        }),
      );
      setFormInputs(initialInputs);
      setIdCounter(initialInputAmount + 1);
    }
  }, [initialInputAmount]);

  const handleInputChange = (text: string, set: number) => {
    setFormInputs(prevInputs => {
      const updatedInputs = prevInputs.map(input =>
        input.set === set ? {...input, value: text} : input,
      );
      return updatedInputs;
    });
  };

  const handleAddInput = () => {
    const newInput: SetWeightsFormInput = {
      set: idCounter,
      value: '',
    };
    setFormInputs(prevInputs => [...prevInputs, newInput]);
    setIdCounter(prevCounter => prevCounter + 1);
  };

  const handleRemoveInput = (set: number) => {
    setFormInputs(prevInputs => prevInputs.filter(input => input.set !== set));
  };

  const validateValue = async (input: string) => {
    try {
      await validateInputNumber(input);
      // Validation succeeded, form values are valid
      //console.log('Form values are valid');
    } catch (error) {
      // Validation failed, error contains validation errors
      //console.log('Form validation failed:', error);
      setError('Form validation failed: ' + error);
      ToastAndroid.show('Form validation failed:' + error, ToastAndroid.SHORT);
    }
  };
  const handleSubmit = async () => {
    const inputValues = formInputs.map(input => {
      validateValue(input.value);
      return input.value;
    });

    if (error === undefined || error === '') {
      const workoutObject: WorkoutProcessItem = {
        exercise: workoutItem.exercise,
        weightAmounts: inputValues,
      };

      onSubmit(workoutObject);
    }
    // onSubmit(inputValues);
    //console.log('Submitted values:', inputValues);
  };

  const renderItem = ({item}: {item: SetWeightsFormInput}) => (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={item.value}
        placeholder={`Input ${item.set}`}
        onChangeText={text => handleInputChange(text, item.set)}
      />

      {canChangeInputAmount && (
        <Button
          title="Remove"
          onPress={() => handleRemoveInput(item.set)}
          color="#FF0000"
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={formInputs}
        keyExtractor={item => item.set.toString()}
        renderItem={renderItem}
      />

      {canChangeInputAmount && (
        <Button title="Add Input" onPress={handleAddInput} />
      )}
      <View style={{paddingBottom: 10}} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    //padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
});

export default TextInputList;
