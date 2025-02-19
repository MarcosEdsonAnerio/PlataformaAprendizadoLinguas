import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const MemoryGame = () => {
  // Dados das cartas (palavras em inglês e suas traduções)
  const cardData = [
    { id: 1, word: 'Apple', translation: 'Maçã', isFlipped: false, isMatched: false },
    { id: 2, word: 'Book', translation: 'Livro', isFlipped: false, isMatched: false },
    { id: 3, word: 'Cat', translation: 'Gato', isFlipped: false, isMatched: false },
    { id: 4, word: 'Dog', translation: 'Cachorro', isFlipped: false, isMatched: false },
    { id: 5, word: 'House', translation: 'Casa', isFlipped: false, isMatched: false },
    { id: 6, word: 'Car', translation: 'Carro', isFlipped: false, isMatched: false },
  ];

  // Duplica e embaralha as cartas
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matches, setMatches] = useState(0);

  useEffect(() => {
    initializeGame();
  }, []);

  // Inicializa o jogo
  const initializeGame = () => {
    const duplicatedCards = [...cardData, ...cardData].map((card, index) => ({
      ...card,
      id: index + 1, // Garante IDs únicos
    }));
    const shuffledCards = shuffleArray(duplicatedCards);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatches(0);
  };

  // Embaralha o array de cartas
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Lógica para virar uma carta
  const flipCard = (id) => {
    if (flippedCards.length === 2 || cards.find((card) => card.id === id).isMatched) return;

    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, isFlipped: true } : card
    );
    setCards(updatedCards);

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      checkForMatch(newFlippedCards);
    }
  };

  // Verifica se as cartas viradas formam um par
  const checkForMatch = (flippedCards) => {
    const [firstCardId, secondCardId] = flippedCards;
    const firstCard = cards.find((card) => card.id === firstCardId);
    const secondCard = cards.find((card) => card.id === secondCardId);

    if (firstCard.word === secondCard.translation || firstCard.translation === secondCard.word) {
      // Par encontrado
      const updatedCards = cards.map((card) =>
        card.id === firstCardId || card.id === secondCardId ? { ...card, isMatched: true } : card
      );
      setCards(updatedCards);
      setMatches(matches + 1);

      if (matches + 1 === cardData.length) {
        Alert.alert('Parabéns!', 'Você encontrou todos os pares!');
      }
    } else {
      // Par não encontrado, virar as cartas novamente após um breve delay
      setTimeout(() => {
        const updatedCards = cards.map((card) =>
          card.id === firstCardId || card.id === secondCardId ? { ...card, isFlipped: false } : card
        );
        setCards(updatedCards);
      }, 1000);
    }

    setFlippedCards([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memory Game</Text>
      <Text style={styles.subtitle}>Combine as palavras com suas traduções.</Text>

      {/* Tabuleiro de cartas */}
      <View style={styles.board}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[styles.card, card.isFlipped || card.isMatched ? styles.cardFlipped : null]}
            onPress={() => flipCard(card.id)}
            disabled={card.isMatched}
          >
            <Text style={styles.cardText}>
              {card.isFlipped || card.isMatched ? (card.isMatched ? '✅' : card.word) : '❓'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botão para reiniciar o jogo */}
      <TouchableOpacity style={styles.restartButton} onPress={initializeGame}>
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
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  card: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardFlipped: {
    backgroundColor: '#fff',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
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

export default MemoryGame;