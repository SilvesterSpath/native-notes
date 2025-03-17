import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const NotesScreen = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'First Note', content: 'This is the first note' },
    { id: 2, title: 'Second Note', content: 'This is the second note' },
    { id: 3, title: 'Third Note', content: 'This is the third note' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
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

export default NotesScreen;
