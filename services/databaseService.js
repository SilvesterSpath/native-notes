import { database } from './appwrite';

const databaseService = {
  // List Documents
  async getDocuments(dbId, collectionId) {
    console.log('DatabaseService.getDocuments...');
    try {
      const response = await database.listDocuments(dbId, collectionId);
      console.log('Raw Appwrite response:', response);
      return response.documents || [];
    } catch (error) {
      console.error('Error fetching documents:', error.message);
      return { error: error.message };
    }
  },

  // Create Document
  async createDocument(dbId, collectionId, documentId, data) {
    try {
      const response = await database.createDocument(
        dbId,
        collectionId,
        documentId,
        data
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
