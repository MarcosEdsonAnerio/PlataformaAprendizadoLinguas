import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const games = [
  { id: '1', title: 'Flashcards', description: 'Aprenda novas palavras', icon: 'flash-on' },
  { id: '2', title: 'Memory Game', description: 'Combine palavras e imagens', icon: 'memory' },
  { id: '3', title: 'Complete a Frase', description: 'Pratique gramática', icon: 'text-format' },
];

const Games = ({ navigation }) => {
  const handleStartGame = (gameId) => {
    // Lógica para iniciar o jogo (pode ser substituída por navegação ou função real)
    console.log(`Iniciar jogo: ${gameId}`);
    navigation.navigate('GameScreen', { gameId }); // Exemplo de navegação
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.gameCard}>
            <View style={styles.gameHeader}>
              <MaterialIcons name={item.icon} size={30} color="#28a745" />
              <Text style={styles.gameTitle}>{item.title}</Text>
            </View>
            <Text style={styles.gameDescription}>{item.description}</Text>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => handleStartGame(item.id)}
            >
              <Text style={styles.startButtonText}>Começar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  gameCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  gameHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  gameTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  gameDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  startButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Games;