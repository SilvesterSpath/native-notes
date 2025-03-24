import { Client, Databases } from 'react-native-appwrite';

const getConfig = () => ({
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  db: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
  col: {
    notes: process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID,
  },
});

const config = getConfig();

/* const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  projectId: 'native-notes', // Make sure this is the **project ID**, not name
  db: 'native-app-db',
  col: {
    notes: 'notes',
  },
}; */

console.log('📦 Appwrite config:', config);

const client = new Client()
  .setEndpoint(config.endpoint)
  .setProject(config.projectId);

/* console.log('Appwrite client:', client); */

/* switch (Platform.OS) {
  case 'android':
    client.setPlatform(process.env.EXPO_PUBLIC_APPWRITE_PACKAGE_NAME);
    break;
} */

const database = new Databases(client);

export { database, config, client };
