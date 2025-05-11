import { router, Stack } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Pressable
                onPress={() => alert('Да! Это кнопка работает.')}
                style={{
                  marginRight: 10,
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 5,
                }}
              >
                <Text>About</Text>
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            title: 'About',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Pressable
                onPress={() => router.replace('/')}
                style={{
                  marginRight: 10,
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 5,
                }}
              >
                <Text>Home</Text>
              </Pressable>
            ),
          }}
        />
      </Stack>
    </>
  );
}
