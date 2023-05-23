import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: '10rem',
  },
  title: {
    fontSize: '20rem',
    color: 'white',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: '16rem',
    color: 'black',
  },

  inputContainer: {
    height: '250rem',
  },
  dropdownContainer: {
    width: '200rem',
    height: '40rem',
  },
  dropdown: {
    backgroundColor: '#fafafa',
    borderWidth: '1rem',
    borderColor: '#ccc',
  },
  dropdownMenu: {
    // marginTop: 8,
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    // flex: 1,
    backgroundColor: '#ffffff22',
    height: '35rem',
    //paddingHorizontal: 16,
    //paddingBottom: '40rem',
    borderRadius: '4rem',
  },

  textTitle: {
    paddingLeft: '5rem',
    paddingTop: '10rem',
    paddingBottom: '5rem',
    color: 'white',
  },
  textInput: {
    paddingHorizontal: '5rem',
    color: 'white',
    fontSize: '14rem',
  },
  errorText: {
    color: 'red',
    paddingTop: '6rem',
    paddingLeft: '5rem',
  },
  dropdownButtonContainer: {
    // flex: 1,
    backgroundColor: '#ffffff',
    height: '40rem',

    borderRadius: '4rem',
  },

  textInputHalfContainer: {
    width: '80%',
    backgroundColor: '#ffffff22',
    height: '35rem',
    //paddingHorizontal: 16,
    //paddingBottom: '40rem',
    borderRadius: '4rem',
  },
});

export default styles;
