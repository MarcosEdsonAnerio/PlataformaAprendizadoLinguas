import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo de Aprendizado de Vocabulário</Text>
      <Text style={styles.description}>Implementação de jogos interativos em desenvolvimento!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default GameScreen;
