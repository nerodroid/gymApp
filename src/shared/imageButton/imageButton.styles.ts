import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  mainContainer: {
    height: '100rem',
    borderRadius: '20rem',
    width: '270rem',
    backgroundColor: '#FFD54F',
  },
  imageContainer: {
    flex: '1rem',
    width: '100%',
    borderRadius: '20rem',
    height: '100%',
    overflow: 'hidden',
  },
  textContainer: {
    backgroundColor: '#B0BEC5',
    //borderRadius: '20rem',
    width: '100%',
    position: 'absolute',
    bottom: '0rem',
    //left: '10rem',
  },
  textStyles: {
    color: 'white',
    fontSize: '18rem',
    paddingLeft: '15rem',
    textShadowColor: 'black', // Shadow color
    textShadowOffset: {width: 1, height: 1}, // Shadow offset
    textShadowRadius: 5, // Shadow blur radius
  },
});

export default styles;
