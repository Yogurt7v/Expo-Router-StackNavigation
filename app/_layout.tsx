import { router, Stack } from 'expo-router';
import { Pressable, Text, View, Image } from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  );
}

export default function RootLayout() {
  return (
    <>
      {/* <Stack>
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
            headerTitle: () => <LogoTitle />,
            headerRight: () => (
              <Pressable
                onPress={() => alert('This is a button!')}
                style={{
                  marginRight: 10,
                  backgroundColor: 'white',
                  padding: 10,
                  borderRadius: 5,
                }}
              >
                <View style={{ flexDirection: 'row', transform: [{ rotate: '90deg' }] }}>
                  <Text>I</Text>
                  <Text>I</Text>
                  <Text>I</Text>
                </View>
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
                <Text>About</Text>
              </Pressable>
            ),
          }}
        />
      </Stack> */}
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
