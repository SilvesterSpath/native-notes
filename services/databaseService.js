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
};

export default databaseService;
