import {Dimensions, View, ImageBackground} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import styles from './carousel.styles';

const CarouselComponent = () => {
  const width = Dimensions.get('window').width;

  const imageURL =
    'https://www.healthkart.com/connect/wp-content/uploads/2016/03/banner-7.jpg';
  return (
    <View style={styles.mainContainer}>
      <Carousel
        loop
        width={width - 20}
        height={width / 2 - 50}
        autoPlay={true}
        style={styles.carouselContainer}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        //onSnapToItem={index => console.log('current index:', index)}
        renderItem={() => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,

              justifyContent: 'center',
            }}>
            <ImageBackground
              source={{uri: imageURL}}
              resizeMode="cover"
              style={styles.imageBackground}></ImageBackground>
          </View>
        )}
      />
    </View>
  );
};
export default CarouselComponent;
