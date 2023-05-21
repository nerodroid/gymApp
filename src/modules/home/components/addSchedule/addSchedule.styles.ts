import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
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
    height: '30rem',
    // width: '100%',
    backgroundColor: 'gray',
    borderRadius: '5rem',
    //marginHorizontal: '10rem',
    // paddingHorizontal: '10rem',
    // marginBottom: '5rem',
  },
  inputContainer: {
    height: '250rem',
  },
  dropdownContainer: {
    width: 200,
    height: 40,
  },
  dropdown: {
    backgroundColor: '#fafafa',
    borderWidth: 1,
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
});

export default styles;
