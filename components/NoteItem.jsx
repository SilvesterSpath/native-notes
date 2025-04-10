import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NoteItem = ({ note, onDelete }) => {
  console.log('🪪 Rendering note:', note);
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{note.text}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(note.$id)}
      >
        <Text style={styles.deleteButtonText}>❌</Text>
      </TouchableOpacity>
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
  deleteButton: {
    fontSize: 18,
    color: 'red',
  },
});

export default NoteItem;
