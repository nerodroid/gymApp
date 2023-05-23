import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 28,
    marginBottom: 8,
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 4,
    paddingRight: '15rem',
  },
  value: {
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'column',
    //justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    paddingRight: 4,
  },
  progressValue: {
    marginRight: 2,
  },
});
export default styles;
