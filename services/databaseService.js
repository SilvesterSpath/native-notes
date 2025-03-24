import { database } from './appwrite';
import { ID, Permission, Role } from 'react-native-appwrite';

const databaseService = {
  // List Documents
  /*   async getDocuments(dbId, collectionId) {
    console.log('DatabaseService.getDocuments...');
    try {
      const response = await database.listDocuments(dbId, collectionId);
      console.log('Raw Appwrite response:', response);
      return response.documents || [];
    } catch (error) {
      console.error('Error fetching documents:', error.message);
      return { error: error.message };
    }
  }, */

  async getDocuments(dbId, collectionId) {
    console.log('DatabaseService.getDocuments...');
    try {
      const res = await fetch(
        `https://cloud.appwrite.io/v1/databases/${dbId}/collections/${collectionId}/documents`,
        {
          method: 'GET',
          headers: {
            'X-Appwrite-Project': 'native-notes',
            'X-Appwrite-Response-Format': '1.6.0',
          },
        }
      );

      const json = await res.json();
      console.log('✅ Fallback fetch result:', json);
      return json.documents || [];
    } catch (error) {
      console.error('❌ Fetch failed:', error.message);
      return { error: error.message };
    }
  },

  // Create Document
  async createDocument(dbId, collectionId, id = null, data, permissions = []) {
    try {
      const response = await database.createDocument(
        dbId,
        collectionId,
        id || ID.unique(),
        data,
        permissions
      );
      return response;
    } catch (error) {
      console.error('Error creating document:', error.message);
      return { error: error.message };
    }
  },
  // Delete Document
  async deleteDocument(dbId, collectionId, documentId) {
    try {
      await database.deleteDocument(dbId, collectionId, documentId);
      return { success: true };
    } catch (error) {
      console.error('Error deleting document:', error.message);
      return { error: error.message };
    }
  },
};

export default databaseService;
