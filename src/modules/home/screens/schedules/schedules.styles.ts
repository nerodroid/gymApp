import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: '10rem',
  },
  title: {
    fontSize: '20rem',
    color: 'black',
  },
  subTitle: {
    fontSize: '16rem',
    color: 'black',
  },
  textInput: {
    height: '40rem',
    // width: '100%',
    backgroundColor: 'gray',
    borderRadius: '5rem',
    marginHorizontal: '10rem',
    paddingHorizontal: '10rem',
    marginBottom: '10rem',
  },
  inputContainer: {
    height: '150rem',
    paddingBottom: '10rem',
  },
});

export default styles;
