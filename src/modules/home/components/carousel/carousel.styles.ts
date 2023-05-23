import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  mainContainer: {
    borderRadius: '30rem',

    paddingTop: '15rem',
    paddingBottom: '5rem',
  },

  carouselContainer: {
    borderRadius: '26rem',
    alignSelf: 'center',
    borderWidth: '0rem',
    borderColor: 'gray',
    elevation: 2,
    shadowColor: '#FFFFFF66',
    shadowOffset: {width: '1rem', height: '2rem'},
    shadowOpacity: 0.8,
    shadowRadius: '4rem',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default styles;
