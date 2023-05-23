import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  textInputContainer: {
    flex: 1,
    backgroundColor: '#ffffff22',
    height: '40rem',
    //paddingHorizontal: 16,
    //paddingTop: 40,
    borderRadius: '4rem',
  },

  textTitle: {
    paddingLeft: '5rem',
    paddingBottom: '10rem',
    color: 'white',
  },
  textInput: {
    paddingHorizontal: '15rem',
    color: 'white',
    fontSize: '14rem',
  },
  errorText: {
    color: 'red',
    marginBottom: '10rem',
  },
});

export default styles;
