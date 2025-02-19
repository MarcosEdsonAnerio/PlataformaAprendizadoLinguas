import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Games = ({ navigation }) => {
  // Lista de jogos disponíveis
  const games = [
    {
      id: '1',
      title: 'Flashcards',
      description: 'Aprenda novas palavras com cartões de memorização.',
      icon: 'flash-on',
      screen: 'Flashcards', // Nome da tela de destino
    },
    {
      id: '2',
      title: 'Memory Game',
      description: 'Combine palavras com suas traduções ou imagens.',
      icon: 'memory',
      screen: 'MemoryGame', // Nome da tela de destino (crie essa tela depois)
    },
    {
      id: '3',
      title: 'Complete a Frase',
      description: 'Pratique gramática completando frases.',
      icon: 'text-format',
      screen: 'CompleteSentence', // Nome da tela de destino (crie essa tela depois)
    },
    {
      id: '4',
      title: 'Quiz de Pronúncia',
      description: 'Escute e escolha a palavra correta.',
      icon: 'volume-up',
      screen: 'PronunciationQuiz', // Nome da tela de destino (crie essa tela depois)
    },
    {
      id: '5',
      title: 'Jogo da Forca',
      description: 'Adivinhe palavras antes de completar o boneco.',
      icon: 'mood',
      screen: 'Hangman', // Nome da tela de destino (crie essa tela depois)
    },
    {
      id: '6',
      title: 'Tradução Rápida',
      description: 'Traduza palavras ou frases contra o tempo.',
      icon: 'timer',
      screen: 'FastTranslation', // Nome da tela de destino (crie essa tela depois)
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Jogos para Aprender Inglês</Text>
      <Text style={styles.subtitle}>Escolha um jogo para começar:</Text>

      {/* Lista de jogos */}
      {games.map((game) => (
        <TouchableOpacity
          key={game.id}
          style={styles.gameCard}
          onPress={() => navigation.navigate(game.screen)} // Navega para a tela do jogo
        >
          <View style={styles.gameHeader}>
            <MaterialIcons name={game.icon} size={30} color="#007bff" />
            <Text style={styles.gameTitle}>{game.title}</Text>
          </View>
          <Text style={styles.gameDescription}>{game.description}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
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
  },
});

export default Games;