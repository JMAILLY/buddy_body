import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import config from './config';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      //fetch test users form expressjs
     fetch(config.API_URL+'/users')
         .then((response) => response.json())
         .then((users) => setUsers(users))
      }, []);
  return (
      <View style={styles.container}>
        <Text>
          <ul>
            {users.map(user =>
              <li key={user.id}>
                {user.username}
              </li>
            )}
          </ul>
        </Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
