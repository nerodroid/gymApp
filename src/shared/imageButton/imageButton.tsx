import {
  ImageBackground,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import styles from '@gym-app/shared/imageButton/imageButton.styles';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  image?: string;
  onClick: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean | undefined;
  backgroundColor?: string;
  title?: string;
  subTitle?: string;
  subTitleBackgroundColor?: string;
}
const ImageButton: React.FC<Props> = (props: Props) => {
  const {
    image,
    onClick,
    style,
    backgroundColor,
    title,
    subTitle,
    subTitleBackgroundColor,
  } = props;
  const imageURL = image
    ? image
    : 'https://www.healthkart.com/connect/wp-content/uploads/2016/03/banner-7.jpg';

  const pressedStyles = [style || {}, {opacity: 0.5}];
  const unpressedStyles = [style || {}];
  return (
    <View
      style={[
        styles.mainContainer,
        style && style,
        {backgroundColor: backgroundColor ? backgroundColor : 'pink'},
      ]}>
      <LinearGradient
        colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']}
        start={{x: 0, y: 0}} // Top-left corner
        end={{x: 0, y: 1}} // Bottom-left corner
        style={[
          styles.gradientContainer,

          {
            flex: 1,
            position: 'absolute',
            height: '100%',
          },
        ]}>
        <Pressable
          onPress={onClick}
          style={({pressed}) => [
            {
              flex: 1,
            },
            pressed ? pressedStyles : unpressedStyles,
          ]}>
          {/* <View style={styles.textContainer}> */}
          <Text style={styles.textStyles}>{title?.toUpperCase()}</Text>
          <Text
            style={[
              styles.subTextStyles,
              {backgroundColor: subTitleBackgroundColor},
            ]}>
            {subTitle?.toUpperCase()}
          </Text>
          {/* </View> */}
          <ImageBackground
            source={{uri: imageURL}}
            resizeMode="cover"
            style={styles.imageContainer}></ImageBackground>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default ImageButton;
