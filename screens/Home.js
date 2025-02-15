import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo, {user.name}!</Text>
      <Text style={styles.subtitle}>Email: {user.email}</Text>
      {/* Adicione aqui o restante do dashboard */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
});

export default Home;