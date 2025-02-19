import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Flashcards = () => {
  // Dados dos flashcards
  const flashcards = [
    { id: '1', word: 'Apple', translation: 'Maçã' },
    { id: '2', word: 'Book', translation: 'Livro' },
    { id: '3', word: 'Cat', translation: 'Gato' },
    { id: '4', word: 'Dog', translation: 'Cachorro' },
    { id: '5', word: 'House', translation: 'Casa' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = new Animated.Value(0);

  // Função para virar o card
  const flipCard = () => {
    setIsFlipped(!isFlipped);
    Animated.timing(flipAnimation, {
      toValue: isFlipped ? 0 : 180,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  // Interpolação para a animação de rotação
  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  // Estilos animados para os lados do card
  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  // Função para ir para o próximo card
  const nextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      flipAnimation.setValue(0);
    }
  };

  // Função para voltar ao card anterior
  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
      flipAnimation.setValue(0);
    }
  };

  // Função para reiniciar o jogo
  const restartGame = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    flipAnimation.setValue(0);
  };

  return (
    <View style={styles.container}>
      {/* Card */}
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={flipCard}>
          <Animated.View style={[styles.card, styles.cardFront, frontAnimatedStyle]}>
            <Text style={styles.cardText}>{flashcards[currentIndex].word}</Text>
          </Animated.View>
          <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle]}>
            <Text style={styles.cardText}>{flashcards[currentIndex].translation}</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>

      {/* Controles */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={prevCard} style={styles.controlButton}>
          <MaterialIcons name="navigate-before" size={30} color="#007bff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={nextCard} style={styles.controlButton}>
          <MaterialIcons name="navigate-next" size={30} color="#007bff" />
        </TouchableOpacity>
      </View>

      {/* Reiniciar */}
      <TouchableOpacity onPress={restartGame} style={styles.restartButton}>
        <Text style={styles.restartButtonText}>Reiniciar</Text>
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
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  card: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    backfaceVisibility: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardFront: {
    position: 'absolute',
  },
  cardBack: {
    backgroundColor: '#007bff',
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  controlButton: {
    padding: 10,
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

export default Flashcards;