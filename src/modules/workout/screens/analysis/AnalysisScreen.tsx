import TextButton from '@gym-app/shared/textButton/textButton';
import scheduleActions from '@gym-app/storage/realm/actions/scheduleActions';
import ScheduleProgressActions from '@gym-app/storage/realm/actions/scheduleProgressActions';
import {ScheduleProgress} from '@gym-app/storage/realm/models/ScheduleProgress';
import {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {
  ScheduleProgressItem,
  WorkoutProgressItem,
} from '../todayWorkout/todayWorkoutScreen';
import styles from './analysisScreen.styles';
import {ScrollView} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const AnalysisScreen = () => {
  const [scheduleProgressItems, setScheduleProgressItems] = useState<any>(
    ScheduleProgressActions.getAllScheduleProgresses(),
  );

  const renderWorkoutProgress = (scheduleProgress: ScheduleProgressItem) => {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{scheduleProgress.date.toDateString()}</Text>

        <Text style={styles.label}>Schedule Name:</Text>
        <Text style={styles.value}>{scheduleProgress.schedule.name}</Text>

        <Text style={styles.label}>Workout Progresses:</Text>
        {scheduleProgress.workoutProgresses.map(progress => (
          <View key={progress._id.toString()} style={styles.progressContainer}>
            <View style={{flexDirection: 'row', width: '100%'}}>
              <Text style={styles.value}>{progress.exercise.name}</Text>
            </View>

            {progress.weightAmounts.map((item: string, index: number) => {
              return (
                <>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.label}>Rep: {index + 1}</Text>
                    <Text style={styles.label}>Weight: {item}</Text>
                  </View>
                </>
              );
            })}
          </View>
        ))}
      </View>
    );
  };

  return (
    <View>
      <Text>Analysis Screen</Text>

      <Text>scheduleProgressItems</Text>
      <View>
        {/* <Text>Bezier Line Chart</Text> */}
        {/* <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix="kg"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c40',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        /> */}
      </View>
      {scheduleProgressItems.map((item: ScheduleProgress) => {
        return renderWorkoutProgress(item);
      })}
    </View>
  );
};

export default AnalysisScreen;
