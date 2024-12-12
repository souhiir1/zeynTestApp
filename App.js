import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Home from './screens/home';
import Dashboard from './screens/dashboard';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem('user');
      setUserExists(!!user);
      setIsLoading(false);
    };

    checkUser();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userExists ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
