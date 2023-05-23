import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  mainContainer: {
    height: '100rem',
    borderRadius: '20rem',
    width: '100%',
    elevation: 1,
    // shadowColor: '#FFFFFF',
    // shadowOffset: {width: 1, height: 1},
    // shadowOpacity: 0.9,
    // shadowRadius: 5,
    // overflow: 'hidden',
  },

  gradientContainer: {
    height: '100rem',
    borderRadius: '20rem',
    width: '100%',
  },
  imageContainer: {
    width: '180rem',
    right: 0,
    position: 'absolute',
    borderTopRightRadius: '20rem',
    borderBottomRightRadius: '20rem',

    height: '100%',
    overflow: 'hidden',
  },
  textContainer: {
    flex: 1,

    paddingTop: '40rem',
    paddingVertical: '10rem',
  },
  textStyles: {
    borderRadius: '30rem',
    position: 'absolute',
    top: '30rem',

    color: 'white',
    fontSize: '18rem',
    paddingLeft: '15rem',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },

  subTextStyles: {
    borderRadius: '6rem',
    position: 'absolute',
    top: '55rem',
    left: '12rem',
    color: 'white',
    fontSize: '11rem',
    paddingVertical: '1rem',
    paddingHorizontal: '6rem',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
});

export default styles;
