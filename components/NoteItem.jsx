import { View, Text, StyleSheet } from 'react-native';

const NoteItem = ({ item }) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 18,
  },
});

export default NoteItem;
