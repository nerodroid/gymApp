import {ImageBackground, Text, View} from 'react-native';

import styles from './profileSection.styles';

const imageURL =
  // eslint-disable-next-line max-len
  'https://scontent.fcmb3-2.fna.fbcdn.net/v/t1.6435-9/131662627_3733774733367376_9048537779042781931_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEdzO77NHkScYYLzP8Yx8SxvkLtyVlzewC-Qu3JWXN7AIwMQPQINz2beb2M-eVHuSx1dLtb0GA60zy3jCuREggl&_nc_ohc=QqK914-UbAIAX_VN7SB&_nc_ht=scontent.fcmb3-2.fna&oh=00_AfDJYElfrs5G-0aNn-ZbFNN7QeOc6HWvbpAAEOizYCs45A&oe=649003A9';

const ProfileSection: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileContainer}>
        <View style={styles.profileIcon}>
          <ImageBackground
            source={{uri: imageURL}}
            resizeMode="cover"
            style={styles.imageContainer}></ImageBackground>
        </View>
        <View style={styles.textArea}>
          <Text style={styles.titleText}>Sample Name</Text>
          <Text style={styles.subtitleText}>Age: 28, Weight: 87 KG</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileSection;
