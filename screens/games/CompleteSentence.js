import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const CompleteSentence = () => {
  // Dados das frases e opções
  const sentences = [
    {
      id: 1,
      sentence: 'I ___ to the store.',
      options: ['go', 'went', 'gone', 'going'],
      correctAnswer: 'went',
    },
    {
      id: 2,
      sentence: 'She ___ a book every night.',
      options: ['read', 'reads', 'reading', 'has read'],
      correctAnswer: 'reads',
    },
    {
      id: 3,
      sentence: 'They ___ playing soccer.',
      options: ['is', 'am', 'are', 'be'],
      correctAnswer: 'are',
    },
    {
      id: 4,
      sentence: 'We ___ to the park yesterday.',
      options: ['go', 'went', 'gone', 'going'],
      correctAnswer: 'went',
    },
    {
      id: 5,
      sentence: 'He ___ a new car last week.',
      options: ['buy', 'buys', 'bought', 'buying'],
      correctAnswer: 'bought',
    },
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Função para verificar a resposta
  const checkAnswer = (selectedAnswer) => {
    const currentSentence = sentences[currentSentenceIndex];
    if (selectedAnswer === currentSentence.correctAnswer) {
      setScore(score + 1);
      if (currentSentenceIndex < sentences.length - 1) {
        setCurrentSentenceIndex(currentSentenceIndex + 1);
      } else {
        Alert.alert('Parabéns!', 'Você completou todas as frases!');
      }
    } else {
      Alert.alert('Ops!', 'Resposta incorreta. Tente novamente.');
    }
  };

  // Função para reiniciar o jogo
  const restartGame = () => {
    setCurrentSentenceIndex(0);
    setScore(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete a Frase</Text>
      <Text style={styles.subtitle}>Escolha a palavra correta para completar a frase:</Text>

      {/* Frase atual */}
      <Text style={styles.sentence}>
        {sentences[currentSentenceIndex].sentence}
      </Text>

      {/* Opções de palavras */}
      <View style={styles.optionsContainer}>
        {sentences[currentSentenceIndex].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => checkAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pontuação */}
      <Text style={styles.score}>Pontuação: {score}</Text>

      {/* Botão para reiniciar o jogo */}
      <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
        <Text style={styles.restartButtonText}>Reiniciar Jogo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  sentence: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    margin: 5,
    minWidth: 80,
    alignItems: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  restartButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
  },
  restartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CompleteSentence;