import { Text, View, StyleSheet, Image } from 'react-native';
import PostImage from '../assets/images/post-it.png';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={PostImage} style={{ width: 200, height: 200 }} />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default HomeScreen;
