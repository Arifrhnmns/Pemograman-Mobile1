import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function About({ route, navigation }) {
  const { friend } = route.params;
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Detail Kontak" />
        <Card.Content>
          <Text style={styles.label}>No.HP:</Text>
          <Text style={styles.value}>{friend.hp}</Text>
          <Text style={styles.label}>NIM:</Text>
          <Text style={styles.value}>{friend.nim}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Home')}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            Home
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // Untuk Android
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
      },
    }),
  },
  label: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#28a745', // Warna hijau untuk tombol
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
