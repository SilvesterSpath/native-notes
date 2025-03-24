import databaseService from './databaseService';
import { ID } from 'react-native-appwrite';

// Appwrite database collection ID
const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const collectionId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
  // Get Notes
  async getNotes() {
    const response = await databaseService.getDocuments(dbId, collectionId);
    if (response.error) {
      return { error: response.error };
    }

    return { data: response };
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

    const response = await databaseService.createDocument(
      dbId,
      collectionId,
      data,
      ID.unique()
    );

    if (response?.error) {
      return { error: response.error };
    }

    return { data: response };
  },
};

export default noteService;
