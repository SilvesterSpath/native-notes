import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Client, Databases } from 'react-native-appwrite';

const AppwriteTestScreen = () => {
  useEffect(() => {
    const runTest = async () => {
      const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('native-notes'); // Your actual project ID

      const databases = new Databases(client);

      try {
        console.log('📡 Testing Appwrite connection...');
        const response = await databases.listDocuments(
          'native-app-db',
          'notes'
        );
        console.log('✅ Notes:', response);
      } catch (err) {
        console.error('❌ Appwrite error:', err.message);
      }
    };

    runTest();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Testing Appwrite...</Text>
    </View>
  );
};

export default AppwriteTestScreen;
