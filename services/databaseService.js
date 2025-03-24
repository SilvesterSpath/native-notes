import { database } from './appwrite';

const databaseService = {
  // List Documents
  async getDocuments(dbId, collectionId) {
    try {
      const response = await database.listDocuments(dbId, collectionId);
      return response.documents || [];
    } catch (error) {
      console.error('Error fetching documents:', error.message);
      return { error: error.message };
    }
  },

  // Create Document
  async createDocument(dbId, collectionId, data, id = null) {
    try {
      const response = await database.createDocument(
        dbId,
        collectionId,
        data,
        id || undefined
      );
      return response;
    } catch (error) {
      console.error('Error creating document:', error.message);
      return { error: error.message };
    }
  },
};

export default databaseService;
