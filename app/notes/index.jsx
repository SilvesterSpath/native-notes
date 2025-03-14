import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NotesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+ New Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: 'tomato',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default NotesScreen;
