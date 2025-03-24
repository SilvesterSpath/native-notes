import { useEffect, useState } from 'react';
import NoteList from '../../components/NoteList';
import AddNoteModal from '../../components/AddNoteModal';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import noteService from '../../services/noteService';
import { ActivityIndicator } from 'react-native';

const NotesScreen = () => {
  const [notes, setNotes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch notes
  const fetchNotes = async () => {
    console.log('Fetching notes...');
    setLoading(true);
    try {
      const response = await noteService.getNotes();

      console.log('📥 Fetched notes from Appwrite:', response.data);

      if (response.error) {
        setError(response.error);
        Alert.alert('Error', response.error);
      } else {
        if (response.data.length === 0) {
          console.log('⚠️ No visible notes. Permissions may be missing.');
        }
        setNotes(response.data);
        setError(null);
      }
    } catch (err) {
      console.error('Unexpected error in fetchNotes:', err);
      setError('Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  /*   useEffect(() => {
    fetchNotes();
  }, []); */

  // Function to add a new note
  const addNote = async () => {
    if (newNote.trim() === '') return;

    const response = await noteService.addNote(newNote);
    if (response.error) {
      setError(response.error);
      Alert.alert('Error', response.error);
    } else {
      await fetchNotes();

      setError(null);
    }

    setNewNote('');
    setModalVisible(false);
  };

  // Function to delete a note
  const deleteNote = async (noteId) => {
    Alert.alert('Delete Note', 'Are you sure you want to delete this note?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          const response = await noteService.deleteNote(noteId);
          if (response.error) {
            setError(response.error);
            Alert.alert('Error', response.error);
          } else {
            setNotes(notes.filter((note) => note.$id !== noteId));
            setError(null);
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size='large' color='#007bff' />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <NoteList notes={notes} onDelete={deleteNote} />
      )}
      <TouchableOpacity style={styles.refreshButton} onPress={fetchNotes}>
        <Text style={styles.refreshButtonText}>🔄 Refresh Notes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>

      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
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

  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 10,
    flex: 1,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 10,
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    maringBottom: 10,
  },
  refreshButton: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },

  refreshButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NotesScreen;
