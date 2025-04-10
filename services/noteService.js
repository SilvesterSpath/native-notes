import databaseService from './databaseService';
import { ID, Permission, Role } from 'react-native-appwrite';

// Appwrite database collection ID
const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const collectionId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

console.log(dbId, collectionId);

const noteService = {
  // Get Notes
  async getNotes() {
    console.log('Calling databaseService.getDocuments...');
    try {
      const response = await databaseService.getDocuments(dbId, collectionId);
      console.log('Raw Appwrite response:', response);
      if (response.error) {
        return { error: response.error };
      }
      return { data: response };
    } catch (err) {
      console.error('Error in getNotes:', err);
      return { error: err.message || 'Unknown error' };
    }
  },

  // Add New Note
  async addNote(note) {
    if (!note) {
      return { error: 'Note is required' };
    }
    const data = {
      text: note,
      createdAt: new Date().toISOString(),
    };
    const permissions = [
      Permission.read(Role.any()),
      Permission.write(Role.any()),
    ];

    const response = await databaseService.createDocument(
      dbId,
      collectionId,
      ID.unique(),
      data,
      permissions
    );

    if (response?.error) {
      return { error: response.error };
    }

    return { data: response };
  },

  // Delete Note
  async deleteNote(noteId) {
    const response = await databaseService.deleteDocument(
      dbId,
      collectionId,
      noteId
    );
    if (response?.error) {
      return { error: response.error };
    }
    return { success: true };
  },
};

export default noteService;
