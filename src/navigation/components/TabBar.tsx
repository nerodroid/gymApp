import React, {useState} from 'react';

import {View, Pressable, Dimensions, Animated} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';

const TabBar = ({state, descriptors, navigation}: any) => {
  const [animationIn] = useState(new Animated.Value(1));
  const [animationOut] = useState(new Animated.Value(1));
  const handleIconPress = () => {
    Animated.timing(animationIn, {
      toValue: 1.2,
      duration: 200,
      useNativeDriver: false,
    }).start();

    Animated.timing(animationOut, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const animatedInStyle = {
    transform: [{scale: animationIn}],
  };
  const animatedOutStyle = {
    transform: [{scale: animationOut}],
  };
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route: any, index: number) => {
        if (route.name == 'PlaceholderScreen') {
          return (
            <View key={index} style={styles.mainItemContainer}>
              {/* <SelectWheel /> */}
            </View>
          );
        }

        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          handleIconPress();
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View
            key={index}
            style={[
              styles.mainItemContainer,
              {borderRightWidth: label == 'notes' ? 3 : 0},
            ]}>
            <Pressable
              onPress={onPress}
              style={
                {
                  //backgroundColor: isFocused ? 'gray' : '#182028',
                  //borderRadius: 60,
                  //width: 100,
                }
              }>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: 10,
                }}>
                {isFocused ? (
                  <Animated.View style={isFocused ? animatedInStyle : {}}>
                    <Icon
                      name={label.toLowerCase()}
                      size={30}
                      color={isFocused ? 'white' : 'gray'}
                    />
                  </Animated.View>
                ) : (
                  <Animated.View style={isFocused ? {} : animatedOutStyle}>
                    <Icon
                      name={label.toLowerCase()}
                      size={30}
                      color={isFocused ? 'white' : 'gray'}
                    />
                  </Animated.View>
                )}
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const styles = EStyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: '25rem',
    backgroundColor: '#75757575',
    borderRadius: '35rem',
    //marginHorizontal: width * 0.1,
    width: '86%',
    height: '60rem',
    alignSelf: 'center',
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: '1rem',
    borderColor: '#333B42',
  },
});

export default TabBar;
