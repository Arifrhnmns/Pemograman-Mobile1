import React from 'react';
import { View, FlatList, StyleSheet, Platform } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const friends = [
  { id: '1', name: 'Arip', hp: '08980520407', nim: '2230511068' },
  { id: '2', name: 'Nur Insan Subekti', hp: '081316742795', nim: '2230511058' },
  { id: '3', name: 'Rafdy Fauzan Ilham Firdaus', hp: '085174210937', nim: '2230511066' },
  { id: '4', name: 'Fino Falentino', hp: '085798806252', nim: '2230511095' },
  { id: '5', name: 'Muhammad Fadlan Syuhada', hp: '083893026231', nim: '2230511067' },
  { id: '6', name: 'M Utama Luhur Budhy', hp: '089630461568', nim: '2230511079' },
  { id: '7', name: 'Eri Zulfan Diwani', hp: '085795769727', nim: '2230511055' },
  { id: '8', name: 'Reiza Maulidia Senjaya', hp: '081315171380', nim: '2230511080' },
  { id: '9', name: 'Raka Wahyu Sagara', hp: '081219852211', nim: '2230511057' },
  { id: '10', name: 'Putri Aulia Maulida', hp: '085216643396', nim: '2230511083' },
  ];

  export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplikasi Daftar Teman</Text>
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title title={item.name} />
            <Card.Actions>
              <Button
                mode="contained"
                onPress={() => navigation.navigate('About', { friend: item })}
                style={styles.button}
                labelStyle={styles.buttonText}
              >
                LIHAT
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#444',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  card: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5, // Untuk Android
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
      },
    }),
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
