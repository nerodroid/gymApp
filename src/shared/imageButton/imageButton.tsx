import {
  ImageBackground,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import styles from '@gym-app/shared/imageButton/imageButton.styles';

interface Props {
  image?: string;
  onClick: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean | undefined;
  backgroundColor?: string;
  title?: string;
}
const ImageButton: React.FC<Props> = (props: Props) => {
  const {image, onClick, style, backgroundColor, title} = props;
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
      <Pressable
        onPress={onClick}
        style={({pressed}) => [
          {
            flex: 1,
          },
          pressed ? pressedStyles : unpressedStyles,
        ]}>
        <ImageBackground
          source={{uri: imageURL}}
          resizeMode="cover"
          style={styles.imageContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyles}>{title?.toUpperCase()}</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
};

export default ImageButton;
