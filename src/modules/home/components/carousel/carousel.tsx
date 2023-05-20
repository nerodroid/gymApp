import {Dimensions, View, ImageBackground} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const CarouselComponent = () => {
  const width = Dimensions.get('window').width;

  const imageURL =
    'https://www.healthkart.com/connect/wp-content/uploads/2016/03/banner-7.jpg';
  return (
    <View
      style={{
        borderRadius: 30,
        //height: 160,
        paddingVertical: 10,
        //backgroundColor: '#F5F5F5',
      }}>
      <Carousel
        loop
        width={width - 20}
        height={width / 2 - 50}
        autoPlay={true}
        style={{
          borderRadius: 26,
          alignSelf: 'center',
          borderWidth: 0,
          borderColor: 'gray',
        }}
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
              style={{
                flex: 1,
                width: '100%',
                height: '100%',
              }}></ImageBackground>
          </View>
        )}
      />
    </View>
  );
};
export default CarouselComponent;
