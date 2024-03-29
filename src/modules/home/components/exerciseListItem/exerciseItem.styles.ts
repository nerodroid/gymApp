import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: '18rem',
    color: 'black',
  },
  description: {
    fontSize: '16rem',
    color: 'black',
  },
  muscleGroup: {
    fontSize: '16rem',
    color: 'black',
  },
  sets: {
    fontSize: '16rem',
    color: 'black',
  },
  reps: {
    fontSize: '16rem',
    color: 'black',
  },
  buttonStyleUpdate: {
    width: '60rem',
    height: '40rem',
    backgroundColor: 'green',
  },
  buttonStyleDelete: {
    width: '60rem',
    height: '40rem',
    backgroundColor: 'red',
  },
  textStyle: {
    fontSize: '12rem',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: '5rem',
  },
  buttonSeparator: {
    paddingLeft: 10,
  },
});

export default styles;
