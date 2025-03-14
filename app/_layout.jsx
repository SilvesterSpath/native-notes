import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  return (
    <>
      {/* Ensures the status bar is visible */}
      <StatusBar style='light' translucent />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
          contentStyle: {
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: 'white',
          },
          headerTitleAlign: 'center', // ✅ This centers the title
        }}
      >
        <Stack.Screen name='index' options={{ title: 'Home' }} />
        <Stack.Screen name='notes' options={{ headerTitle: 'Notes' }} />
      </Stack>
    </>
  );
};

export default RootLayout;
