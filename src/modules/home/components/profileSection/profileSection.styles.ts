import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  mainContainer: {
    height: '70rem',
    width: '90%',
    backgroundColor: '#9E9E9E44',
    alignSelf: 'center',
    borderRadius: '35rem',
    //alignContent: 'center',
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'center',
    paddingLeft: '10rem',
    //borderWidth: '1rem',
    borderColor: 'white',
    borderRadius: '30rem',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    // borderRadius: '20rem',
    height: '100%',
    overflow: 'hidden',
  },
  profileIcon: {
    height: '50rem',
    width: '50rem',
    borderRadius: '29rem',
    backgroundColor: 'gray',
    overflow: 'hidden',
    borderWidth: '1rem',
    borderColor: 'white',
  },
  textArea: {
    flexDirection: 'column',
    paddingLeft: '15rem',
    alignContent: 'flex-start',
  },
  titleText: {
    fontSize: '18rem',
    color: 'white',
  },
  subtitleText: {
    fontSize: '12rem',
    color: 'white',
    textAlign: 'left',
  },
});

export default styles;
